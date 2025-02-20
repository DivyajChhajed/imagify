import "dotenv/config";
import express from "express";
import cors from "cors";
import connectdb from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();
await connectdb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API Working Fine"));
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log("Server Running on PORT " + PORT));
