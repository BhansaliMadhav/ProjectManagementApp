import { Router } from "express";
import { getTeams } from "../controllers/teamController";

const router = Router();
// route to get list of all the tasks related to the project
router.get("/", getTeams);

export default router;
