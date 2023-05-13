import express from "express";
import {
  getWorkoutEasy,
  getWorkoutEasyById,
  createWorkoutEasy,
  updateWorkoutEasy,
  deleteWorkoutEasy,
} from "../controller/workouteasy.js";

const router = express.Router();

// http://localhost:5000/workouteasy
router.get("/workouteasy", getWorkoutEasy);
// http://localhost:5000/workouteasy/:id
router.get("/workouteasy/:id", getWorkoutEasyById);
// http://localhost:5000/workouteasy
router.post("/workouteasy", createWorkoutEasy);
// http://localhost:5000/workouteasy/:id
router.patch("/workouteasy/:id", updateWorkoutEasy);
// http://localhost:5000/workouteasy/:id
router.delete("/workouteasy/:id", deleteWorkoutEasy);

export default router;
