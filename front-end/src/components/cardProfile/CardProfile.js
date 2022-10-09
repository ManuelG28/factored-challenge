import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ContainedButton from "../button/ContainedButton";

const CardProfile = ({ image, name, position }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={image}
        alt="Profile picture"
      />
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {position}
          </Typography>
          <ContainedButton url="/skills">Check skills</ContainedButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardProfile;
