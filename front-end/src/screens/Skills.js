import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../api/profiles";
import SpiderChart from "../components/spiderChart/SpiderChart";

const Skills = () => {
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
    <Stack>
      <Typography variant="h4">
        {profile.name} - {profile.position}{" "}
      </Typography>
      <SpiderChart data={profile.skills} />
    </Stack>
  );
};

export default Skills;
