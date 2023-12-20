import express from "express";
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const diary = diaryServices.findById(+id);

  return diary ? res.send(diary) : `Sorry, No comment found with ${id}!`;
});
router.post("/", (_req, res) => {
  res.send("Saving a diary");
});

export default router;
