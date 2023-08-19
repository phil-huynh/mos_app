from fastapi import APIRouter, Response, Depends, status
from pydantic import BaseModel
from db import BlogQueries

router = APIRouter()


class BlogIn(BaseModel):
    title: str
    description: str
    body: str


class BlogOut(BaseModel):
    id: str
    title: str
    description: str
    body: str


class BlogsOut(BaseModel):
    blogs: list[BlogOut]


@router.get("/blogs", response_model=BlogsOut)
def blogs_list(queries: BlogQueries = Depends()):
  return BlogsOut(**queries.get_all_blogs())


@router.get("/blogs/{id}", response_model=BlogOut)
def get_blog(
        id: str,
        response: Response,
        queries: BlogQueries = Depends()
    ):
    blog = queries.find_blog(id)
    if blog is None:
        response.status_code = 404
    else:
      return BlogOut(**blog)


@router.post("/blogs", response_model=BlogOut)
def create_blog(
        blog: BlogIn,
        queries: BlogQueries = Depends()
    ):
    return BlogOut(**queries.add_blog(blog))