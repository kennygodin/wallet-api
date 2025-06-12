import express from "express";

import {
  createTransaction,
  deleteTransaction,
  getTransactionsByUserId,
  getTransactionSummary,
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/summary/:userId", getTransactionSummary);

router.delete("/:id", deleteTransaction);

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransaction);

export default router;
