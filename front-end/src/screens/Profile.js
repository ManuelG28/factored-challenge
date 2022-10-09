import CardProfile from "../components/cardProfile/CardProfile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../api/profiles";

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile(profileId);
      return data;
    };
    fetchData().then((data) => setProfile(data));
  }, [profileId]);

  return (
    <CardProfile
      image={profile.picture}
      name={profile.name}
      position={profile.position}
      skills={profile.skills}
      id={profile.id}
    />
  );
};

export default Profile;
