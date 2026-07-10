import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
} from "@mui/material";

import { useState } from "react";

export default function OutputPanel({ result }) {

  const [tab, setTab] = useState(0);

  if (!result) {
    return (
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" mb={2}>
          Output
        </Typography>

        <Box
          sx={{
            height: 400,
            border: "2px dashed #d0d7de",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
          }}
        >
          Generated diagram will appear here
        </Box>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" mb={2}>
        Output
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
      >
        <Tab label="PDF Preview" />
        <Tab label="TikZ Code" />
        <Tab label="Downloads" />
      </Tabs>

      {/* PDF */}
      {tab === 0 && (
        <Box mt={3}>
          <iframe
            title="pdf"
            src={`http://127.0.0.1:5000/generated/${result.pdf}`}
            width="100%"
            height="900px"
            style={{
              border: "0.5px solid #ddd",
              borderRadius: "10px",
            }}
          />
        </Box>
      )}

      {/* TikZ */}
      {tab === 1 && (
        <Box
          mt={3}
          sx={{
            bgcolor: "#161616",
            color: "#00ff88",
            p: 3,
            borderRadius: 2,
            overflow: "auto",
            maxHeight: 650,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
          }}
        >
          {result.tikz}
        </Box>
      )}

      {/* Downloads */}
      {tab === 2 && (
        <Box mt={3} display="flex" gap={2}>

          <Button
            variant="contained"
            href={`http://127.0.0.1:5000/generated/${result.pdf}`}
            target="_blank"
          >
            Download PDF
          </Button>

          <Button
            variant="outlined"
            href={`http://127.0.0.1:5000/generated/${result.tex}`}
            target="_blank"
          >
            Download TEX
          </Button>

        </Box>
      )}

    </Paper>
  );
}