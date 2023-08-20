from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel
from db import SubscriberQueries

router = APIRouter()


class SubscriberIn(BaseModel):
    email: str
    first_name: str


class SubscriberOut(BaseModel):
    id: str
    email: str
    first_name: str


class SubscribersOut(BaseModel):
    subscribers: list[SubscriberOut]


class Message(BaseModel):
    message: str


@router.get("/subscribers", response_model=SubscribersOut)
def subscribers_list(queries: SubscriberQueries = Depends()):
  return SubscribersOut(**queries.get_all_subscribers())


@router.get("/subscribers/{id}", response_model=SubscriberOut)
def get_subscriber(
    id: str,
    response: Response,
    queries: SubscriberQueries = Depends()
):
    subscriber = queries.find_subscriber(id)
    if subscriber is None:
        response.status_code = 404
    else:
      return SubscriberOut(**subscriber)


@router.post("/subscribers", response_model=SubscriberOut)
def create_subscriber(
        subscriber: SubscriberIn,
        queries: SubscriberQueries = Depends()
    ):
    print(subscriber)
    return SubscriberOut(**queries.add_subscriber(subscriber))

@router.delete(
    "/subscribers/{id}",
    response_model=Message,
    responses={400: {"model": Message}}
)
def remove_subscriber(
        id: str,
        response: Response,
        queries: SubscriberQueries = Depends()
    ):
    return Message(**queries.delete_subscriber(id))