import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (_req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(9000);
