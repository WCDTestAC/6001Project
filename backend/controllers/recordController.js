const Record = require("../models/recordModel");
const mongoose = require("mongoose");

// GET all record
const getRecords = async (req, res) => {
  const records = await Record.find({}).sort({ createdAt: -1 });

  res.status(200).json(records);
};

// GET single record
const getRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Typer.isValidObjectId(id)) {
    return res.status(404).json({
      mssg: "Record not found",
    });
  }

  const record = await Record.findById(id);

  if (!record) {
    return res.status(404).json({
      mssg: "Record not found",
    });
  } else {
    res.status(200).json(record);
  }
};

// POST a new workout
const createRecord = async (req, res) => {
  const { tittle, load, reps } = req.body;

  try {
    const record = await Record.create({
      tittle,
      load,
      reps,
    });
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
// DELETE single record
const deleteRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Record" });
  }

  const record = await Record.findOneAndDelete({ _id: id });

  if (!record) {
    return res.status(400).json({ error: "No such Record" });
  }

  res.status(200).json(record);
};
// UPDATE single record
const updateRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such record" });
  }

  const record = await Record.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
  );

  if (!record) {
    return res.status(400).json({ error: "No such record" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createRecord,
  getRecords,
  getRecord,
  deleteRecord,
  updateRecord,
};
