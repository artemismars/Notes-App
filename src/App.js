import { createTheme, ThemeProvider } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

const customTheme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element="" />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
