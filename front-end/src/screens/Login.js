import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Button from "../components/button/ContainedButton";
import Input from "../components/input/Input";
import factoredLogo from "../images/factored.png";

const Login = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Stack spacing={5}>
        <Box
          sx={{
            height: 222,
            maxHeight: { xs: 222, md: 167 },
          }}
          component="img"
          alt="Factored logo"
          src={factoredLogo}
        />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Input type="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Input type="password" label="Password" />
          </Grid>
        </Grid>
        <Button color="success"> Sign in</Button>
      </Stack>
    </Box>
  );
};

export default Login;
