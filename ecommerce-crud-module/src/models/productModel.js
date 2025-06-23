class ProductModel {
    constructor(database) {
        this.database = database;
    }

    async createProduct(productData) {
        const query = 'INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)';
        const [result] = await this.database.execute(query, [productData.name, productData.price, productData.description, productData.stock]);
        return result.insertId;
    }

    async getProduct(productId) {
        const query = 'SELECT * FROM products WHERE id = ?';
        const [rows] = await this.database.execute(query, [productId]);
        return rows[0];
    }

    async updateProduct(productId, productData) {
        const query = 'UPDATE products SET name = ?, price = ?, description = ?, stock = ? WHERE id = ?';
        await this.database.execute(query, [productData.name, productData.price, productData.description, productData.stock, productId]);
        return productId;
    }

    async deleteProduct(productId) {
        const query = 'DELETE FROM products WHERE id = ?';
        await this.database.execute(query, [productId]);
        return productId;
    }

    async getAllProducts() {
        const query = 'SELECT * FROM products';
        const [rows] = await this.database.execute(query);
        return rows;
    }
}

module.exports = ProductModel;