const express = require("express");
const app = express();
const port = 8080;

const routers = require("./DataSiswa");
app.use(routers);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
