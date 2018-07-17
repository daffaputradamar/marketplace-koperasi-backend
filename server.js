const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

const pembeliRouter = require("./routes/api/pembeli");

app.use("/api/pembeli", pembeliRouter);

app.listen(PORT, () => {
  console.log(`app listening in http://localhost:${PORT}`);
});
