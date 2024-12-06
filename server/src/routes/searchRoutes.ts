import { Router } from "express";
import { search } from "../controllers/searchController";

const router = Router();
// route to get list of all the tasks related to the project
router.get("/", search);
export default router;
