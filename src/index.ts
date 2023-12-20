import express from "express"; //ESMOdules
// const express = require("express"); //CommonJS -> Aunque estemos utilizando ESModules, se compila en commonjs
import diaryRoutes from "./routes/diaries";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("Someone pinged Here!!");
  res.send("PING");
});

//Routes
app.use("/api/diaries", diaryRoutes);

app.listen(PORT, () => {
  console.log(
    `Server running on port: ${PORT} -> ` + new Date().toLocaleDateString()
  );
});
