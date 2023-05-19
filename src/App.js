import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { Topbar} from "./sences/global/topbar";
import { useState, useEffect} from 'react';




function App() {
  const [theme, ColorMode] = useMode();
  const [newtheme, newColorMode] = useMode();
  return (

    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">          
            <Topbar/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
