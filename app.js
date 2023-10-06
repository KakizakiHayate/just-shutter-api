const express = require('express');
const app = express();
const PORT = 8000;
const foodRouter = require('./routes/food-router.js');

app.use("/", foodRouter);

// ローカルサーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;