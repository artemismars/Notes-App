const router = require("express").Router();
const db = require("../models/index");

router.post("/notes", async (req, res) => {
  try {
    const note = await db.Note.create(req.body);
    console.log(note);
    res.status(202).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
