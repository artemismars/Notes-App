const router = require("express").Router();
const db = require("../models/index");

router.post("/", async (req, res) => {
  try {
    const note = await db.Note.create({
      title: req.body.title,
      details: req.body.details,
      category: req.body.category,
    });
    console.log(note);

    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.status(202).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
