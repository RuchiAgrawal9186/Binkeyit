import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./Config/connectDB.js";
import userRouter from "./routes/user.routes.js";
dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  // server to client
  res.json({ message: "server is running" });
});

app.use("/api/user", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running in ", PORT);
  });
});
