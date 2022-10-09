import { Button } from "@mui/material";

const ContainedButton = ({ children, color = "primary", onButtonClick }) => {
  return (
    <Button variant="contained" color={color}>
      {children}
    </Button>
  );
};

export default ContainedButton;
