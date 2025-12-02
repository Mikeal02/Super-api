import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();       // loads .env
connectDB();           // connects to MongoDB

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRoutes);

app.get("/",(req,res)=>{
  res.send("API is running...");
})

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
