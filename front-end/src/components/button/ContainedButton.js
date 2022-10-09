import { Button } from "@mui/material";

const ContainedButton = ({
  children,
  size = 12,
  color = "primary",
  onButtonClick,
}) => {
  return (
    <Button variant="contained" color={color}>
      {children}
    </Button>
  );
};

export default ContainedButton;
