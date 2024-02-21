import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#93fb5f",
    },
    secondary: {
      main: "#296c00",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#072100",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#93fb5f",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#93fb5f",
            },
            "&:hover fieldset": {
              borderColor: "#93fb5f",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#93fb5f",
            },
          },
        },
      },
    },
  },
});

export default function Register() {
  const [errors, setErrors] = React.useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const email = formData.get("email");
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");

    // Check if passwords match
    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      username,
      email,
      password1,
      password2,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(userData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/auth/registration/",
        requestOptions
      );
      const responseData = await response.json();

      if (!response.ok) {
        setErrors(responseData);
        return;
      }

      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* ... (unchanged code for form fields) */}
            </Grid>
            {Object.keys(errors).length > 0 && (
              <div style={{ color: "red" }}>
                {Object.keys(errors).map((key) => (
                  <div key={key}>{errors[key]}</div>
                ))}
              </div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#296c00", color: "white" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink
                  to={"/login"}
                  variant="body2"
                  sx={{ color: "#8c5000" }}
                >
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
