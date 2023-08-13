from fastapi import APIRouter, Response, status
from pydantic import BaseModel

router = APIRouter()


class OfferingIn(BaseModel):
    title: str
    desription: str
    price: float


class OfferingIn(BaseModel):
    title: str
    desription: str
    price: float