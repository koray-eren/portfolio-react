import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';

import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import CssBaseline from "@mui/material/CssBaseline";

export const light = {
  palette: {
    mode: 'light',
  },
} as ThemeOptions
export const dark = {
  palette: {
    mode: 'dark',
  },
} as ThemeOptions

function App() {
  const [theme, setTheme] = useState(true);
  
  const appliedTheme = createTheme(theme ? light : dark)

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className="App">
        <p>The theme is {theme ? "light" : "dark" }</p>
          <Button onClick={() => setTheme(!theme)} color="inherit">
            {!theme ? 
            <>
              Light Mode
              <Brightness7Icon />
            </> 
            : 
            <>
              Dark Mode
              <Brightness3Icon />
            </> }
          </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

