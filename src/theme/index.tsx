import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions} from "@mui/material/styles"
import { useMemo } from "react";

import {palette} from './palette'
import {shadows} from './shadows'
import {typography} from './typography'
import { CssBaseline } from "@mui/material";

type Props = {
  children: React.ReactNode;
}

export default function ThemeProvider({children}:  Props){
  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      typography
    }), []
  );

  const theme = createTheme(baseOption as ThemeOptions);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </MuiThemeProvider>
  )

}