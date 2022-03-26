const router = require("express").Router();
const db = require("../models/index");

router.get("/", async (req, res) => {
  try {
    const notes = await db.Note.findAll();
    console.log("notes:", notes);
    res.json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(`req.body:`, req.body);
    const note = await db.Note.create({
      title: req.body.title,
      details: req.body.details,
      category: req.body.category,
    });
    console.log(note);
    res.status(202).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("deleted id:", req.params.id);
    await db.Note.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
