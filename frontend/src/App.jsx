import { useState } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PromptCard from "./components/PromptCard";
import OutputPanel from "./components/OutputPanel";

import api from "./services/api";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f62fe",
    },
    background: {
      default: "#f4f4f4",
    },
  },
});

export default function App() {

  const [prompt, setPrompt] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const generateDiagram = async () => {

    if (!prompt.trim()) return;

    try {

      setLoading(true);

      const res = await api.post("/generate", {
        prompt,
      });

      setResult(res.data);

    } catch (err) {

      console.error(err);

      alert("Backend Error");

    } finally {

      setLoading(false);

    }

  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Box sx={{ display: "flex" }}>

        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: "250px",
            mt: "72px",
            p: 3,
            bgcolor: "#f5f7fb",
            height: "calc(100vh - 72px)",
            overflowY: "auto",
          }}
        >

          <PromptCard
            prompt={prompt}
            setPrompt={setPrompt}
            loading={loading}
            generateDiagram={generateDiagram}
          />

          <Box mt={3}>
            <OutputPanel result={result} />
          </Box>

        </Box>

      </Box>

    </ThemeProvider>
  );
}