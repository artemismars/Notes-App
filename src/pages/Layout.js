import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 250;

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

const styles = {
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
};

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        <Typography variant="h3" component="h1">
          Note App
        </Typography>

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor:
                    location.pathname === item.path ? "#f4f4f4" : null,
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </div>
  );
}
