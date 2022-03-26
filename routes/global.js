const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcome to note app!");
});
router.use("/notes", require("./notes"));

module.exports = router;
