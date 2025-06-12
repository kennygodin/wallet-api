import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

import transactionRouter from "./routes/transaction.route.js";

dotenv.config();

const app = express();

app.use(ratelimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/transactions", transactionRouter);

app.get("/", (req, res) => {
  res.send("It works!");
});

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
