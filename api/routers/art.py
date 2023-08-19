from fastapi import APIRouter, Response, Depends, status
from pydantic import BaseModel
from db import ArtQueries

router = APIRouter()


class PieceIn(BaseModel):
    imageURL: str
    title: str


class PieceOut(BaseModel):
    id: str
    imageURL: str
    title: str


class PiecesOut(BaseModel):
    pieces: list[PieceOut]


@router.get("/art", response_model=PiecesOut)
def art_list(queries: ArtQueries = Depends()):
  return PiecesOut(**queries.get_all_art())


@router.get("/art/{id}", response_model=PieceOut)
def get_piece(
        id: str,
        response: Response,
        queries: ArtQueries = Depends()
    ):
    piece = queries.find_piece(id)
    if piece is None:
        response.status_code = 404
    else:
      return PieceOut(**piece)


@router.post("/art", response_model=PieceOut)
def create_piece_entry(
        piece: PieceIn,
        queries: ArtQueries = Depends()
    ):
    return PieceOut(**queries.add_piece(piece))