import { Router } from "express";
import { CartsController } from "../controllers/CartsController.js";


const router = Router();

// Obtener todos los carritos
router.get("/", CartsController.getCarts);

// Crear un nuevo carrito
router.post("/", CartsController.createCarts);

// Obtener productos de un carrito por ID
router.get('/:cid', CartsController.getCartByID);

// Agregar producto a un carrito
router.post('/:cid/products/:pid',CartsController.addProductToCart);

router.delete('/:cid/products/:pid', CartsController.removeProductFromCart)

router.delete('/:cid' , CartsController.removeCart)



export { router as CartRouter };