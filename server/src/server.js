require("dotenv").config();
const express = require('express');
const webRouters = require("./router/web");

const app = express();
const port = process.env.PORT || 4000;
const hostName = process.env.HOST_NAME;

app.use(express.json());

app.use("/chamsocsuckhoe", webRouters)

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});