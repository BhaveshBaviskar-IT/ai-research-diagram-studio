import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Chip,
  Tooltip,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header() {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: "270px",
        width: "calc(100% - 270px)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    flex: 1,
  }}
>
  {/* Logo */}
  <Avatar
    sx={{
      bgcolor: "#ffffff",
      color: "#0f62fe",
      width: 42,
      height: 42,
      fontSize: 22,
      fontWeight: "bold",
    }}
  >
    🤖
  </Avatar>

  {/* Title */}
  <Box>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        lineHeight: 1.2,
      }}
    >
      AI Research Diagram Studio
    </Typography>

    <Typography
      variant="body2"
      sx={{
        opacity: 0.85,
      }}
    >
      IBM Granite • TikZ • LaTeX
    </Typography>
  </Box>
</Box>

        {/* Center */}
        <Chip
          icon={<AutoAwesomeIcon />}
          label="IBM Granite 3.3"
          color="primary"
          sx={{
            borderRadius: 3,
            fontWeight: 600,
            px: 1,
          }}
        />

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            ml: "auto",
          }}
        >
          <Chip
            label="✨ IBM Granite 3.3"
            color="primary"
            sx={{ fontWeight: 600 }}
          />

          <IconButton color="inherit">
            <DarkModeIcon />
          </IconButton>

          <IconButton color="inherit">
            <NotificationsNoneIcon />
          </IconButton>

          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>

          <Avatar
            sx={{
              width: 38,
              height: 38,
              bgcolor: "#2563eb",
              fontWeight: "bold",
            }}
          >
            B
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}