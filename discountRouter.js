import express from "express";
import discountController from "./discountController.js";
const router = express.Router();
router.post("/send", discountController.createDiscount);
export default router;
