import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "client/build","index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
