import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import HistoryIcon from "@mui/icons-material/History";
import AppsIcon from "@mui/icons-material/Apps";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SchemaIcon from "@mui/icons-material/Schema";
import HubIcon from "@mui/icons-material/Hub";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";

const templates = [
  {
    icon: <AccountTreeIcon />,
    title: "Binary Tree",
  },
  {
    icon: <SchemaIcon />,
    title: "Flowchart",
  },
  {
    icon: <HubIcon />,
    title: "UML Diagram",
  },
  {
    icon: <DeviceHubIcon />,
    title: "Neural Network",
  },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 270,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bgcolor: "#111111",
        color: "white",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #222",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          p: 3,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        🤖 IBM AI
      </Box>

      {/* New Chat */}
      <Box px={2}>
        <Button
          fullWidth
          startIcon={<AddIcon />}
          variant="contained"
          sx={{
            borderRadius: 3,
            textTransform: "none",
            py: 1.3,
            fontWeight: 600,
          }}
        >
          New Diagram
        </Button>
      </Box>

      <Box mt={3}>

        <Button
          fullWidth
          startIcon={<SearchIcon />}
          sx={{
            color: "#ddd",
            justifyContent: "flex-start",
            px: 3,
            py: 1.4,
            textTransform: "none",
          }}
        >
          Search History
        </Button>

        <Button
          fullWidth
          startIcon={<FolderOpenIcon />}
          sx={{
            color: "#ddd",
            justifyContent: "flex-start",
            px: 3,
            py: 1.4,
            textTransform: "none",
          }}
        >
          Saved Projects
        </Button>

        <Button
          fullWidth
          startIcon={<HistoryIcon />}
          sx={{
            color: "#ddd",
            justifyContent: "flex-start",
            px: 3,
            py: 1.4,
            textTransform: "none",
          }}
        >
          Recent
        </Button>

        <Button
          fullWidth
          startIcon={<AppsIcon />}
          sx={{
            color: "#ddd",
            justifyContent: "flex-start",
            px: 3,
            py: 1.4,
            textTransform: "none",
          }}
        >
          AI Tools
        </Button>

      </Box>

      <Divider
        sx={{
          bgcolor: "#2b2b2b",
          my: 3,
        }}
      />

      <Typography
        sx={{
          px: 3,
          mb: 2,
          color: "#999",
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: 1,
        }}
      >
        QUICK TEMPLATES
      </Typography>

      <Box px={2}>
        {templates.map((item) => (
          <Button
            key={item.title}
            startIcon={item.icon}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              color: "#eee",
              py: 1.4,
              px: 2,
              mb: 1,
              borderRadius: 3,
              textTransform: "none",

              "&:hover": {
                bgcolor: "#1f1f1f",
              },
            }}
          >
            {item.title}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ bgcolor: "#2b2b2b" }} />

      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "#0f62fe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          B
        </Box>

        <Box>
          <Typography fontWeight="bold">
            Bhavesh
          </Typography>

          <Typography
            variant="body2"
            color="#999"
          >
            IBM Internship
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}