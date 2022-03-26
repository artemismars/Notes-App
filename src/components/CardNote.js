import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";

export default function CardNote({ note, handleDelete }) {
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={<Avatar sx={{ backgroundColor: purple[500] }}>U</Avatar>}
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
      />
      <CardContent>
        <Typography color={grey[500]}>{note.details}</Typography>
      </CardContent>
    </Card>
  );
}
