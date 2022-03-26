import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export default function CardNote({ note, handleClick }) {
  return (
    <Card sx={{ marginTop: 1, marginBottom: 1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: blue[500],
            }}
          >
            U
          </Avatar>
        }
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={() => handleClick(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
