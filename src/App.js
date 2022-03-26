import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./pages/Layout";
import { ThemeProvider } from "@emotion/react";
import { grey, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material";

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: grey[400],
      },
      secondary: purple,
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
