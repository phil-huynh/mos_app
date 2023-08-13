from fastapi import FastAPI
from routers import users, affiliates, blogs, offerings

app = FastAPI()

app.include_router(users.router)
app.include_router(affiliates.router)
app.include_router(blogs.router)
app.include_router(offerings.router)