class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await this.productService.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await this.productService.getProduct(productId);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updatedProduct = await this.productService.updateProduct(productId, productData);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            const deleted = await this.productService.deleteProduct(productId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ProductController;