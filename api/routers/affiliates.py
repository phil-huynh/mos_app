from fastapi import APIRouter, Response, status
from pydantic import BaseModel

router = APIRouter()


class AffiliateIn(BaseModel):
    company: str
    topic: str
    products: list[Product]
    link: str


class AffiliateOut(BaseModel):
    company: str
    product: str
    link: str


class Product(BaseModel):
    name: str
    description: str
    photo: str