from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json


@csrf_exempt
def index(request):
    decoded_str = request.body.decode("utf-8")
    dict_data = json.loads(decoded_str)

    if request.method == "GET":
        return JsonResponse(
            {
                "question": dict_data["question"],
                "answer":   "This is your answer to " + dict_data["question"],
                "meta": "This is a get method",
            }
        )
    else:
        return JsonResponse(
            {
                "question": dict_data["question"],
                "answer": "This is your answer to " + dict_data["question"],
                "meta": "This is a post method",
            }
        )
