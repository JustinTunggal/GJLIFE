import express from "express";
import {
  getWorkoutInter,
  getWorkoutInterById,
  createWorkoutInter,
  updateWorkoutInter,
  deleteWorkoutInter,
} from "../controller/workoutinter.js";

const router = express.Router();

// http://localhost:5000/workoutinter
router.get("/workoutintermediate", getWorkoutInter);
// http://localhost:5000/workoutintermediate/1
router.get("/workoutintermediate/:id", getWorkoutInterById);
// http://localhost:5000/workoutintermediate
router.post("/workoutintermediate", createWorkoutInter);
// http://localhost:5000/workoutintermediate/1
router.patch("/workoutintermediate/:id", updateWorkoutInter);
// http://localhost:5000/workoutintermediate/deleteWorkoutInter
router.delete("/workoutintermediate/:id", deleteWorkoutInter);

export default router;
