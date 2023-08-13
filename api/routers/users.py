from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel
from typing import Optional
from db import SubscriberQueries

router = APIRouter()


class SubscriberIn(BaseModel):
    email: str


class SubscriberOut(BaseModel):
    email: str


class SubscribersOut(BaseModel):
    subscribers: Optional[SubscriberOut]


@router.get("/subscribers", response_model=SubscribersOut)
def subscribers_list(queries: SubscriberQueries = Depends()):
  return {
     "subscribers": queries.get_all_subscribers(),
  }


@router.get("/subscribers/{id}", response_model=SubscriberOut)
def get_subscriber(
    id: str,
    response: Response,
    queries: SubscriberQueries = Depends()
):
    subscriber = queries.get_subscriber(id)
    if subscriber is None:
        response.status_code = 404
    else:
      return subscriber


@router.post("/subscribers", response_model=SubscriberIn)
def create_subscriber(
   subscriber: SubscriberIn,
   queries: SubscriberQueries = Depends()):
   res = queries.create_subscriber(subscriber)
   print("POST RES ------------>", res)

