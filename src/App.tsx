import { Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { darkTheme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ height: "100vh", borderRadius: 0 }}>
        <Paper
          sx={{ pt: 10, pr: 20, pl: 20 }}
          color={darkTheme.palette.primary.dark}
        >
          <Typography variant="h1" color={darkTheme.palette.primary.dark}>
            Aumkar Inamdar
          </Typography>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
