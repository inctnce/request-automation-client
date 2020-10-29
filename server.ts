import express from "express";
import path from "path";
const app = express();

app.get("/", (_req: any, res: any) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(9000);
