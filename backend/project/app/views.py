
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ast import literal_eval
import app.bot

@csrf_exempt
def index(request):
    if request.method == "GET":
        return HttpResponse("This is get.")
    if request.method == "POST":
        try:
            my_bytes = request.body
            my_dict = literal_eval(my_bytes.decode('utf-8'))
            question = my_dict["question"]
            return JsonResponse({"answer":app.bot.agent.run(question)})
        
        except:
            return JsonResponse({"error":"Something wrong happened. Please, ask the question again."})
