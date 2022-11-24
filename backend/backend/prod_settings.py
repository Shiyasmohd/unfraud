import os
import json


with open('secret_key.json') as f:
    secret = json.load(f)
    

SECRET_KEY = os.environ.get('SECRET_KEY')


ALLOWED_HOSTS = ["*"]

CORS_ALLOW_HEADERS = ['*']

CORS_ALLOW_ALL_ORIGINS = True


# DATABASES = {
#     "default": {
#         "ENGINE": secret['ENGINE'],
#         "NAME": secret['NAME'],
#         "USER": secret['USER'],
#         "PASSWORD":os.environ.get('PASSWORD'),
#         "HOST":secret['HOST'],
#         "PORT": secret['PORT']
#     }
# }