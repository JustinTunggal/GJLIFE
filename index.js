import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
import workoutEasyRoute from "./routes/workoutEasyRoute.js";
import workoutInterRoute from "./routes/workoutInterRoute.js";
import workoutAdvanRoute from "./routes/workoutAdvanRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(workoutEasyRoute);
app.use(workoutInterRoute);
app.use(workoutAdvanRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
