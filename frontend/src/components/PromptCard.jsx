import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Select,
  Card,
  CardContent,
  IconButton,
  Box,
} from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const examples = [
  {
    title: "🌳 Binary Tree",
    desc: "Generate a binary tree diagram",
  },
  {
    title: "📊 Flowchart",
    desc: "Create a process flowchart",
  },
  {
    title: "🧠 Neural Network",
    desc: "Generate AI architecture",
  },
  {
    title: "📦 UML Diagram",
    desc: "Generate UML Class Diagram",
  },
  {
    title: "🗄 ER Diagram",
    desc: "Generate ER Database Diagram",
  },
];

export default function PromptCard({
  prompt,
  setPrompt,
  loading,
  generateDiagram,
}) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        AI Diagram Generator
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Describe your research diagram in natural language.
      </Typography>

      <TextField
        multiline
        rows={10}
        fullWidth
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Example: Draw a CNN architecture with Input Layer, Conv2D, MaxPool, Dense and Output Layer..."
      />

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          mt: 1,
          display: "block",
        }}
      >
        Supports natural language prompts • 5000 characters
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        mt={3}
        alignItems="center"
        flexWrap="wrap"
      >
        <IconButton color="primary">
          <AttachFileIcon />
        </IconButton>

        <IconButton color="primary">
          <MicIcon />
        </IconButton>

        <Select
          defaultValue="granite"
          size="small"
          sx={{
            minWidth: 220,
            borderRadius: 3,
          }}
        >
          <MenuItem value="granite">
            🤖 IBM Granite 3.3
          </MenuItem>

          <MenuItem value="granite34">
            🤖 IBM Granite 3.4
          </MenuItem>
        </Select>
      </Stack>

      <Typography
        variant="subtitle1"
        mt={4}
        mb={2}
        fontWeight="bold"
      >
        Example Prompts
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 2,
        }}
      >
        {examples.map((item) => (
          <Card
            key={item.title}
            sx={{
              cursor: "pointer",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 8,
                border: "1px solid #0f62fe",
              },
            }}
          >
            <CardContent>
              <Typography fontWeight="bold">
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Button
    fullWidth
    variant="contained"
    size="large"
    startIcon={<AutoAwesomeIcon />}
    onClick={generateDiagram}
    disabled={loading}
    sx={{
        mt:4,
        py:2,
        borderRadius:4,
        fontSize:18,
        textTransform:"none",
    }}
>
    {loading ? "Generating..." : "Generate Diagram"}
</Button>
    </Paper>
  );
}