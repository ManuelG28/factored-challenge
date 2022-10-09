import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SpiderChart from "../components/spiderChart/SpiderChart";

const Skills = ({ name, position, skills }) => {
  return (
    <Stack>
      <Typography variant="h4">
        {name} - {position}{" "}
      </Typography>
      <SpiderChart data={skills} />
    </Stack>
  );
};

export default Skills;
