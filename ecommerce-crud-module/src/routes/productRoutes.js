import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

const setRoutes = (app) => {
    router.post('/products', productController.createProduct);
    router.get('/products/:id', productController.getProduct);
    router.put('/products/:id', productController.updateProduct);
    router.delete('/products/:id', productController.deleteProduct);

    app.use('/api', router);
};

export default setRoutes;