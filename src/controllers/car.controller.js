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

export const getCarsByBrand = async (req, res) => {
  try {
    let { brand } = req.params;

    if (brand) {
        brand = brand.toUpperCase();
        const cars = await Car.find({ brand });

        if (cars.length > 0) {
            res.status(200).json(cars);
        } else {
            res.status(404).json({ message: "No cars found for this brand" });
        }
    } else {
        res.status(400).json({ message: "Provide a brand" });
    }
    
  } catch (error) {
    console.error("Error buscando por brand:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};