import express from "express";
import { getCars, getUniqueBrands } from "../controllers/car.controller.js";

const router = express.Router();

router.get("/", getCars);
router.get("/brands", getUniqueBrands);

export default router;
