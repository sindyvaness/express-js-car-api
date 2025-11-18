import Car from "../models/car.model.js";

export const getCars = async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
};

export const getUniqueBrands = async (req, res) => {
  try {
    const brands = await Car.distinct("brand");
    res.json(brands);
  } catch (error) {
    console.error("Error getting unique brands", error);
    res.status(500).json({ message: "Internal server error" });
  }
};