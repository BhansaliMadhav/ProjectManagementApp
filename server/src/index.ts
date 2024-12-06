import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
// Route Imports
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("This is home route");
});
// route related to projects
app.use("/projects", projectRoutes);
// route related to tasks
app.use("/tasks", taskRoutes);
// route related to search
app.use("/search", searchRoutes);
// route related to users
app.use("/users", userRoutes);
// route related to teams
app.use("/teams", teamRoutes);

// Server
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`baby! server is running on port ${port}`);
});
