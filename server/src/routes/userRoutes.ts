import { Router } from "express";
import { getUsers, postUser } from "../controllers/userController";

const router = Router();
// route to get list of all the tasks related to the project
router.get("/", getUsers);
router.post("/", postUser);

export default router;
