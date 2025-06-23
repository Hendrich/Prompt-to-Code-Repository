class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }

    async createProduct(productData) {
        try {
            const newProduct = await this.productModel.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error('Error creating product: ' + error.message);
        }
    }

    async getProduct(productId) {
        try {
            const product = await this.productModel.findById(productId);
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error('Error retrieving product: ' + error.message);
        }
    }

    async updateProduct(productId, productData) {
        try {
            const updatedProduct = await this.productModel.update(productId, productData);
            if (!updatedProduct) {
                throw new Error('Product not found or not updated');
            }
            return updatedProduct;
        } catch (error) {
            throw new Error('Error updating product: ' + error.message);
        }
    }

    async deleteProduct(productId) {
        try {
            const result = await this.productModel.delete(productId);
            if (!result) {
                throw new Error('Product not found or not deleted');
            }
            return result;
        } catch (error) {
            throw new Error('Error deleting product: ' + error.message);
        }
    }
}

export default ProductService;