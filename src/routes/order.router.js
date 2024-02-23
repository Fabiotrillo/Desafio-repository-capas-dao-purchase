import { Router } from "express";   
import OrderController from "../controllers/OrdersController.js";


const router = Router();

router.get("/",OrderController.getOrders);
router.get("/:oid",OrderController.getOrderById);
router.get("/", OrderController.createOrder)
router.get("/:oid",OrderController.resolveOrder)


export {router as OrderRouter}
