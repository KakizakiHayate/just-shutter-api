const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// パースする
router.use(bodyParser.json( { extended: true, limit: '10mb' } ));

router.post("/food", (req, res) => {
  console.log(req.body);
  const requestData = {
    message: "Response Succses!",
    status: 200
  };
  res.json(requestData);
});

module.exports = router;