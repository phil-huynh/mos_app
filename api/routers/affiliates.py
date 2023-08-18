from fastapi import APIRouter, Response, status
from pydantic import BaseModel

router = APIRouter()


class AffiliateIn(BaseModel):
    company: str
    topic: str
    link: str


class AffiliateOut(BaseModel):
    company: str
    product: str
    link: str


