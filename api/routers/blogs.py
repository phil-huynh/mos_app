from fastapi import APIRouter, Response, status
from pydantic import BaseModel

router = APIRouter()


class BlogIn(BaseModel):
    title: str
    description: str
    body: str


class BlogOut(BaseModel):
    title: str
    description: str
    body: str