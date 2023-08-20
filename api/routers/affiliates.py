from fastapi import APIRouter, Response, Depends, status
from pydantic import BaseModel
from db import AffiliateQueries

router = APIRouter()


class AffiliateIn(BaseModel):
    company: str
    product: str
    link: str


class AffiliateOut(BaseModel):
    id: str
    company: str
    product: str
    link: str


class AffiliatesOut(BaseModel):
    affiliates: list[AffiliateOut]


class Message(BaseModel):
    message: str


@router.get("/affiliates", response_model=AffiliatesOut)
def affiliates_list(queries: AffiliateQueries = Depends()):
  return AffiliatesOut(**queries.get_all_affiliates())


@router.get("/affiliates/{id}", response_model=AffiliateOut)
def get_affiliate(
    id: str,
    response: Response,
    queries: AffiliateQueries = Depends()
):
    affiliate = queries.find_affiliate(id)
    if affiliate is None:
        response.status_code = 404
    else:
      return AffiliateOut(**affiliate)


@router.post("/affiliates", response_model=AffiliateOut)
def create_affiliate(
        offer: AffiliateIn,
        queries: AffiliateQueries = Depends()
    ):
    return AffiliateOut(**queries.add_affiliate(offer))

@router.delete(
    "/affiliates/{id}",
    response_model=Message,
    responses={400: {"model": Message}}
)
def remove_affiliate(
        id: str,
        response: Response,
        queries: AffiliateQueries = Depends()
    ):
    return Message(**queries.delete_affiliate(id))