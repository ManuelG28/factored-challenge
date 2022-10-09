import { Box } from "@mui/system";
import CardProfile from "../components/cardProfile/CardProfile";

const profile = {
  name: "Manuel Gutierrez",
  image: "https://i.pravatar.cc/400",
  position: "Software Engineer",
};

const Profile = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CardProfile
        image={profile.image}
        name={profile.name}
        position={profile.position}
      />
    </Box>
  );
};

export default Profile;
