import { generateSignature } from "@/controllers";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/generate", generateSignature);

export default router;
