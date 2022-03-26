import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 250;
const styles = {
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  root: {
    display: "flex",
  },
};

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="secondary" />,
    path: "/create",
  },
];

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={styles.root}>
      <Drawer variant="permanent" anchor="left" sx={styles.drawer}>
        <Typography variant="h4" component="h1" textAlign="center">
          Note App
        </Typography>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                backgroundColor:
                  location.pathname === item.path ? "#f4f4f4" : null,
              }}
            >
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  );
}
