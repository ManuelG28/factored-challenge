import TextField from "@mui/material/TextField";

const Input = ({ type, label, isRequired }) => {
  return <TextField type={type} label={label} required={isRequired} sx={{width: "92%"}}/>;
};

export default Input;
