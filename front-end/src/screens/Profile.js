import CardProfile from "../components/cardProfile/CardProfile";

const profile = {
  name: "Manuel Gutierrez",
  image: "https://i.pravatar.cc/400",
  position: "Software Engineer",
};

const Profile = () => {
  return (
    <CardProfile
      image={profile.image}
      name={profile.name}
      position={profile.position}
    />
  );
};

export default Profile;
