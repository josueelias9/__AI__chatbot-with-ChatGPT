# env variables
import os
os.environ["OPENAI_API_KEY"] = "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"
os.environ["OPENWEATHERMAP_API_KEY"] = "12df0412828ec2a4b55885e7d696406a"

# import
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import CharacterTextSplitter
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA
from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType
from langchain.agents import load_tools
from langchain.tools import BaseTool
from langchain.document_loaders import TextLoader
from langchain.utilities import OpenWeatherMapAPIWrapper
from langchain import LLMMathChain, SerpAPIWrapper
from pathlib import Path

# ll model
llm = OpenAI(temperature=0)

# embeding
relevant_parts = []
for p in Path(".").absolute().parts:
    relevant_parts.append(p)
    if relevant_parts[-3:] == ["langchain", "docs", "modules"]:
        break
doc_path = str(Path(*relevant_parts) / "../data/chilean_climate.txt")

loader = TextLoader(doc_path)
documents = loader.load()
text_splitter = CharacterTextSplitter(chunk_size=800, chunk_overlap=0)
texts = text_splitter.split_documents(documents)

embeddings = OpenAIEmbeddings()
docsearch = Chroma.from_documents(texts, embeddings, collection_name="state-of-union")

# tools
tools = []

weather = OpenWeatherMapAPIWrapper()
tools.append(
    Tool.from_function(
        func=weather.run,
        name = "OpenWeatherMap",
        description="Use this tool when you want to have short-term predictions of weather conditions at a specific location."
    ),
)

chilean_climate = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=docsearch.as_retriever())
tools.append(
    Tool(
        name = "ChileanClimate",
        func=chilean_climate.run,
        description="Use this tool when you want to know about average weather conditions and weather patterns for a region over a long period of time."
    )
)

# create agent
agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)
