import { Box } from "@mui/system";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";


const SpiderChart = ({data}) => {
  return (
    <Box>
      <RadarChart outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" fontFamily="Roboto" />
        <PolarRadiusAxis />
        <Radar dataKey="rating" fill="#43B6C5" fillOpacity={0.6} />
      </RadarChart>
    </Box>
  );
};

export default SpiderChart;
