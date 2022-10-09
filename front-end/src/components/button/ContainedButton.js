import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContainedButton = ({ children, color = "primary", url }) => {
  const navigate = useNavigate();
  return (
    <Button variant="contained" color={color} onClick={() => navigate(url)}>
      {children}
    </Button>
  );
};

export default ContainedButton;
