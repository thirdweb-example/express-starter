import express, { Router } from "express";
import { generateSignature } from "../controllers";

const router: Router = express.Router();

router.post("/generate", generateSignature);

export default router;
