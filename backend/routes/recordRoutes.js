// record = workouts
const express = require("express");
const {
  createRecord,
  getRecords,
  getRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/recordController");

const router = express.Router();

//GET all record
router.get("/", getRecords);

//GET single record
router.get("/:id", getRecord);

//POST a new workout
router.post("/", createRecord);

//DELETE single record
router.delete("/:id", deleteRecord);

//UPDATE single record
router.patch("/:id", updateRecord);

module.exports = router;
