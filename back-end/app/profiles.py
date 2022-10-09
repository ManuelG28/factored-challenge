from fastapi import FastAPI
from app.data import make_profiles

app = FastAPI()


@app.get("/", status_code=200)
async def get_profiles():
    return {message: "Back-end running at 0.0.0.0:80"}


@app.get("/profiles", status_code=200)
async def get_profiles():
    return make_profiles()


@app.get("/profiles/{profile_id}", status_code=200)
async def get_profile(profile_id: int):
    return list(filter(lambda profile: profile.id ==
                       profile_id, make_profiles()))
