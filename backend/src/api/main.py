from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.database import DB

# Connect to an in-memory DuckDB database
db = DB()

# Create an instance of FastAPI
app = FastAPI()

# Prepare app for communicating with frontend
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    data = db.get_dict_array(table_name="singers")
    return data
