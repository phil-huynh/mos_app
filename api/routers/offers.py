from fastapi import APIRouter, Response, Request, Depends, status
from pydantic import BaseModel
from db import OfferQueries

router = APIRouter()


class OfferIn(BaseModel):
    title: str
    description: str
    price: float


class OfferOut(BaseModel):
    id: str
    title: str
    description: str
    price: float


class UpdateOfferIn(BaseModel):
    id: str
    title: str
    description: str
    price: float


class OffersOut(BaseModel):
    offers: list[OfferOut]


class Message(BaseModel):
    message: str


@router.get("/offers", response_model=OffersOut)
def offers_list(queries: OfferQueries = Depends()):
  return OffersOut(**queries.get_all_offers())


@router.get("/offers/{id}", response_model=OfferOut)
def get_offer(
    id: str,
    response: Response,
    queries: OfferQueries = Depends()
):
    offer = queries.find_offer(id)
    if offer is None:
        response.status_code = 404
    else:
      return OfferOut(**offer)


@router.post("/offers", response_model=OfferIn)
def create_offer(
        offer: OfferIn,
        queries: OfferQueries = Depends()
    ):
    return OfferOut(**queries.add_offer(offer))

@router.delete(
    "/offers/{id}",
    response_model=Message,
    responses={400: {"model": Message}}
)
def remove_affiliate(
        id: str,
        queries: OfferQueries = Depends()
    ):
    return Message(**queries.delete_offer(id))


@router.put("/offers/{id}")
def update_offer(
        id: str,
        info: OfferIn,
        queries: OfferQueries = Depends()
    ):
    info_dict = {
        "title": info.title if info.title else None,
        "description": info.description if info.description else None,
        "price": info.price if info.price >= 0 else None
    }
    info_dict = {k: v for k, v in info_dict.items() if v or v == 0}
    return OfferOut(**queries.update_offer(id, info_dict))