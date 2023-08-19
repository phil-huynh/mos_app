from fastapi import FastAPI
from routers import (
    affiliates,
    art,
    blogs,
    offers,
    users,
)

app = FastAPI()

app.include_router(affiliates.router)
app.include_router(art.router)
app.include_router(blogs.router)
app.include_router(offers.router)
app.include_router(users.router)