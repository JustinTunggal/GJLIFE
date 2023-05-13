import express from "express";
import {
  getWorkoutAdvan,
  getWorkoutAdvanById,
  createWorkoutAdvan,
  updateWorkoutAdvan,
  deleteWorkoutAdvan,
} from "../controller/workoutadvan.js";

const router = express.Router();

// http://localhost:5000/soalsulit
router.get("/workoutadvanced", getWorkoutAdvan);
// http://localhost:5000/workoutadvanced/1
router.get("/workoutadvanced/:id", getWorkoutAdvanById);
// http://localhost:5000/workoutadvanced
router.post("/workoutadvanced", createWorkoutAdvan);
// http://localhost:5000/workoutadvanced/1
router.patch("/workoutadvanced/:id", updateWorkoutAdvan);
// http://localhost:5000/workoutadvanced/1
router.delete("/workoutadvanced/:id", deleteWorkoutAdvan);

export default router;
