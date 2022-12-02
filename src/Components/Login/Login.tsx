import store from "./../../store/todos";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { LoginInfo } from "../../Types/LoginInfo";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";
import hash from "object-hash";

let isLoginFailed = false;

export default observer(function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    store.signInAction({
      login: data.get("login"),
      hash: hash.sha1(data.get("password")!.toString()),
    } as LoginInfo);

    isLoginFailed = true;
  };

  if (store.user.hash) {
    isLoginFailed = false;
    return <Redirect to="/todo" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Sign in</h2>
        <span>
          (user & password: <strong>root</strong> or <strong>admin</strong>)
        </span>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {!store.user.hash && isLoginFailed && (
            <span style={{ color: "red", fontSize: "0.66em" }}>
              Invalid login or password. Please, try again.
            </span>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
});
