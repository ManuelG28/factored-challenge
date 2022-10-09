from fastapi import FastAPI
from app.data import make_profiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

profiles = make_profiles()


@app.get("/", status_code=200)
async def get_profiles():
    return {"message": "Back-end running at 0.0.0.0:80"}


@app.get("/profiles", status_code=200)
async def get_profiles():
    return profiles


@app.get("/profiles/{profile_id}", status_code=200)
async def get_profile(profile_id: int):
    return list(filter(lambda profile: profile.id ==
                       profile_id, profiles))
