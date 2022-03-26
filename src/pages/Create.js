import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    width: "100%",
  },
  field: {
    marginTop: 1,
    marginBottom: 1,
    display: "block",
  },
};

const categories = [
  {
    text: "pizza",
  },
  {
    text: "donut",
  },
  {
    text: "sundae",
  },
  {
    text: "latte",
  },
  {
    text: "sandwich",
  },
];

const url = "https://artemis-notes-server.herokuapp.com/notes";
// const url = "http://localhost:8080/notes";

export default function Create() {
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") setTitleError(true);
    if (details === "") setDetailsError(true);

    if (title && details) {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  }

  return (
    <Container sx={styles.page}>
      <Typography variant="h5" component="h1" gutterBottom>
        Post your note
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          sx={styles.field}
          fullWidth
          label="title"
          color="secondary"
          onChange={(e) => {
            setTitle(e.target.value);
            if (title === "") setTitleError(false);
          }}
          error={titleError}
        />
        <TextField
          sx={styles.field}
          fullWidth
          label="details"
          color="secondary"
          multiline
          rows={4}
          onChange={(e) => {
            setDetails(e.target.value);
            if (details === "") setDetailsError(false);
          }}
          error={detailsError}
        />
        <FormControl sx={styles.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup defaultValue={categories[0].text}>
            {categories.map((category) => (
              <FormControlLabel
                key={category.text}
                label={category.text}
                control={<Radio color="secondary" />}
                value={category.text}
                onChange={(e) => setCategory(e.target.value)}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
