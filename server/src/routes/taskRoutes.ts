import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/taskController";

const router = Router();
// route to get list of all the tasks related to the project
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
export default router;
