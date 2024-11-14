import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";

const router = Router();
// route to get list of all the projects
router.get("/", getProjects);
// route to create a project
router.post("/", createProject);
export default router;
