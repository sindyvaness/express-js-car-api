import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./src/config/database.js";

// routes
import carRoutes from "./src/routes/car.routes.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/api/cars", carRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});