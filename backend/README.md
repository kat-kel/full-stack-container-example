# Backend

Develop this template.

## First-time set-up

1. Create a virtual Python environment with a version of Python 3.12 or greater.

2. Activate the environment.

3. Install the backend's requirements with `pip install -r requirements.txt`

## Run development server

Run the backend with `fastapi dev app/main.py --port 8000`.

```console
$ fastapi dev app/main.py --port 8000

   FastAPI   Starting production server 🚀

             Searching for package file structure
             from directories with __init__.py files
             Importing from
             full-stack-container-example/backend

    module   📁 app
             ├── 🐍 __init__.py
             └── 🐍 main.py

      code   Importing the FastAPI app object from
             the module with the following code:

             from app.main import app

       app   Using import string: app.main:app

    server   Server started at http://0.0.0.0:8000
    server   Documentation at
             http://0.0.0.0:8000/docs
```
