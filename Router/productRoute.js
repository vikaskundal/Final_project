const express=require('express');
const router=express.Router();
const verifyToken=require('../Middleware/authMiddleware')
const {
    CreateProduct,
    UpdateProduct,
    GetAllProduct,
    GetProductById,
    DeleteProduct
}=require('../Controllers/productController');
const adminMiddleware = require('../Middleware/adminMiddleware');

//public routes
router.get('/products',GetAllProduct);
router.get('/products/:id',GetProductById);

// Admin routes only
router.post('/products', CreateProduct);
router.put('/products/:id', UpdateProduct);
router.delete('/products/:id',adminMiddleware,DeleteProduct);

module.exports=router;