from random import sample, randrange
import random
import names


def make_profiles():
    skills = ['Java', 'Python', 'Kubernetes', 'Vertex AI',
              'Pandas', 'React', 'AWS', 'GCP', 'Azure', 'Go']
    positions = ['ML Engineer', 'Software Engineer',
                 'DevOps Engineer', 'Data Engineer', "MLOps Engineer"]
    profiles = []
    for i in range(15):
        skillsName = sample(skills, k=4)
        skillObjects = []
        for skillName in skillsName:
            skillObjects.append(Skill(skillName, randrange(1, 10)))
        profile = Profile(i, names.get_full_name(), random.choice(
            positions), skillObjects)
        profiles.append(profile)

    return profiles


class Profile:
    def __init__(self, id, name, position, skills):
        self.id = id
        self.name = name
        self.position = position
        self.skills = skills
        self.picture = f"https://i.pravatar.cc/400?{id}"


class Skill:
    def __init__(self, name, rating):
        self.name = name
        self.rating = rating
