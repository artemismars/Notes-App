import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CardNote from "../components/CardNote";

const url = "https://artemis-notes-server.herokuapp.com/notes/";
// const url = "http://localhost:8080/notes/";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  function handleClick(id) {
    fetch(url + id, {
      method: "DELETE",
    }).then(() => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    });
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        width: "100%",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item xs={12} sm={6} lg={3}>
              <CardNote note={note} handleClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
