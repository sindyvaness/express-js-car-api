import express from "express";
import { getCars, getUniqueBrands, getCarsByBrand } from "../controllers/car.controller.js";

const router = express.Router();

router.get("/", getCars);
router.get("/brands", getUniqueBrands);
router.get("/bybrand/:brand", getCarsByBrand)

export default router;
