# E-commerce CRUD Module

This project is a simple e-commerce CRUD module built with Node.js, Express, and MySQL. It provides a basic structure for managing products in an e-commerce application, similar to platforms like Tokopedia.

## Project Structure

```
ecommerce-crud-module
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── database.js       # Database connection configuration
│   ├── controllers
│   │   └── productController.js # Controller for product-related operations
│   ├── models
│   │   └── productModel.js    # Model defining product structure and database interactions
│   ├── routes
│   │   └── productRoutes.js    # Routes for product-related operations
│   └── services
│       └── productService.js    # Business logic for product operations
├── package.json               # NPM configuration file
├── .env                       # Environment variables for sensitive information
├── .gitignore                 # Files and directories to ignore by Git
├── README.md                  # Project documentation
└── sql
    └── schema.sql            # SQL statements for database schema
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ecommerce-crud-module.git
   ```

2. Navigate to the project directory:
   ```
   cd ecommerce-crud-module
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

5. Set up the database schema by running the SQL commands in `sql/schema.sql` on your MySQL database.

## Usage

To start the application, run:
```
npm start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- `POST /products` - Create a new product
- `GET /products/:id` - Retrieve a product by ID
- `PUT /products/:id` - Update a product by ID
- `DELETE /products/:id` - Delete a product by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.