import CardProfile from "../components/cardProfile/CardProfile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProfile } from "../hooks/useProfile";
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
  });

  return (
    <CardProfile
      image={profile.image}
      name={profile.name}
      position={profile.position}
    />
  );
};

export default Profile;
