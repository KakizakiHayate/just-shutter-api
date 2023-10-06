const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// パースする
router.use(bodyParser.json());

router.get("/food", (req, res) => {
  console.log(req.query);
  const requestData = {
    message: "Response Succses!",
    status: 200
  };
  res.json(requestData);
});

module.exports = router;