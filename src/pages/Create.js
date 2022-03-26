import {
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const categories = ["homework", "hobby", "study", "important"];
const styles = {
  margin: {
    marginTop: 2,
    marginBottom: 2,
  },
};

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(title, details, category);

    if (title && details) {
      fetch("https://artemis-notes-server.herokuapp.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    } else {
      if (!title) setTitleError(true);
      if (!details) setDetailsError(true);
    }
  }

  function handleTextFieldChange() {
    setTitleError(false);
    setDetailsError(false);
  }

  return (
    <Container>
      <Typography variant="h5" component="h1" gutterBottom>
        Note app form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="title"
          fullWidth
          sx={styles.margin}
          color="secondary"
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="details"
          fullWidth
          multiline
          rows={4}
          sx={styles.margin}
          color="secondary"
          error={detailsError}
          onChange={(e) => setDetails(e.target.value)}
        />
        <FormControl>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            defaultValue={categories[0]}
            sx={styles.margin}
            color="secondary"
          >
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                value={category}
                label={category}
                control={
                  <Radio
                    color="secondary"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                }
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Button
          endIcon={<SendIcon />}
          sx={{ display: "block" }}
          variant="contained"
          type="submit"
        >
          submit
        </Button>
      </form>
    </Container>
  );
}
