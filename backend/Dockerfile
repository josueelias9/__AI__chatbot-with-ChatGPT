FROM python:3

WORKDIR /usr/src/chatbot

COPY . .

RUN pip install -r requirements.txt

WORKDIR /usr/src/chatbot/project

CMD [ "python", "manage.py","runserver","0.0.0.0:8000" ]

