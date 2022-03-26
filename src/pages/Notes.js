import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CardNote from "../components/CardNote";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://artemis-notes-server.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  function handleDelete(id) {
    fetch("https://artemis-notes-server.herokuapp.com/" + id, {
      method: "DELETE",
    }).then(() => {
      const newNotes = notes.filter((note) => note.id === id);
      setNotes(newNotes);
    });
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} lg={3}>
            <CardNote note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
