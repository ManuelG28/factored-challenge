import { Box } from "@mui/system";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 5,
    fullMark: 10,
  },
  {
    subject: "Chinese",
    A: 10,
    fullMark: 10,
  },
  {
    subject: "English",
    A: 7,
    fullMark: 10,
  },
  {
    subject: "Geography",
    A: 10,
    fullMark: 10,
  },
  {
    subject: "Physics",
    A: 2,
    fullMark: 10,
  },
  {
    subject: "History",
    A: 3,
    fullMark: 10,
  },
];

const SpiderChart = () => {
  return (
    <Box>
      <RadarChart outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" fontFamily="Roboto" />
        <PolarRadiusAxis />
        <Radar dataKey="A" fill="#43B6C5" fillOpacity={0.6} />
      </RadarChart>
    </Box>
  );
};

export default SpiderChart;
