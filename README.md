# Trolley API

This repository contains a RESTful API built with Express.js and MySQL for managing a shop's inventory. The API supports CRUD (Create, Read, Update, Delete) operations on inventory items.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)
- [Author](#author)

## ⚡️ Features

- Create, Read, Update, and Delete inventory items.
- Validate request bodies to ensure data integrity.
- Check for duplicate products before adding to the inventory.
- Fetch inventory items by ID or name.
- Implement pagination for retrieving large datasets.
- Error handling for invalid requests and server errors.

## ⚙️ Technologies Used

- **Node.js** - JavaScript runtime for server-side programming.
- **Express.js** - Web framework for building APIs.
- **MySQL** - Relational database for storing inventory data.
- **Sequelize** - ORM for interacting with the MySQL database.
- **Joi** - Schema description language and data validator for JavaScript.
- **dotenv** - Module to load environment variables from a `.env` file.

## 🎯 API Endpoints

The following endpoints are available:

| Method | Endpoint                     | Description                              |
| ------ | ---------------------------- | ---------------------------------------- |
| POST   | `/shop/inventory`            | Add a new product to the inventory.     |
| GET    | `/shop/inventory/all`        | Retrieve all products from the inventory. |
| GET    | `/shop/inventory/:id`        | Retrieve a product by its ID.           |
| GET    | `/shop/inventory/name/:name` | Retrieve a product by its name.         |
| PUT    | `/shop/inventory/:id`        | Update a product by its ID.             |
| DELETE | `/shop/inventory/:id`        | Delete a product by its ID.             |

### 🚀 Example Request

**Creating a new inventory item:**

```bash
POST /shop/inventory
Content-Type: application/json

{
  "product_name": "Sample Product",
  "product_quantity": 10,
  "product_price": 100,
  "product_category": "Electronics",
  "product_description": "A sample product description."
}
```

**Getting All Inventory Items:**

```bash
GET /shop/inventory/all
```

## 🔗 Installation

### 1. Clone the repository:

```bash
git clone https://github.com/Pirate-Emperor/Trolley_API
```

### 2. Navigate to the project directory:

```bash
cd Trolley_API
```

### 3. Install Dependencies:

```bash
npm install
```

### 4. Set up the database:

- Create a MySQL database for the inventory.
- Update your database connection settings in the Sequelize configuration.

### 5. Create a `.env` file:

Create a `.env` file in the root directory and add your database credentials:

```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

### 6. Run the application:

```bash
npm start
```

## 💡 Usage

You can test the API using tools like [Postman](https://www.postman.com/) or cURL. Make sure to send requests with the appropriate HTTP methods and payloads as described in the API endpoints section. I have included a Postman collection in the `postman` folder for your convenience.

## 🧪 Testing

To run tests for this API, you can use tools like [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/). Here’s how to run the tests:

1. Install the testing dependencies:

```bash
npm install --save-dev mocha chai
```

2. Create a `test` directory and add your test files.

3. Run the tests:

```bash
npx mocha test
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request. Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## 🎉 Acknowledgments

- [Express.js](https://expressjs.com/) - For making API development easy.
- [Sequelize](https://sequelize.org/) - For providing a simple ORM for MySQL.
- [Joi](https://joi.dev/) - For schema validation.
- [Postman](https://www.postman.com/) - For testing APIs effortlessly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Pirate-Emperor**

[![Twitter](https://skillicons.dev/icons?i=twitter)](https://twitter.com/PirateKingRahul)
[![Discord](https://skillicons.dev/icons?i=discord)](https://discord.com/users/1200728704981143634)
[![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/piratekingrahul)

[![Reddit](https://img.shields.io/badge/Reddit-FF5700?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/u/PirateKingRahul)
[![Medium](https://img.shields.io/badge/Medium-42404E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@piratekingrahul)

- GitHub: [Pirate-Emperor](https://github.com/Pirate-Emperor)
- Reddit: [PirateKingRahul](https://www.reddit.com/u/PirateKingRahul/)
- Twitter: [PirateKingRahul](https://twitter.com/PirateKingRahul)
- Discord: [PirateKingRahul](https://discord.com/users/1200728704981143634)
- LinkedIn: [PirateKingRahul](https://www.linkedin.com/in/piratekingrahul)
- Skype: [Join Skype](https://join.skype.com/invite/yfjOJG3wv9Ki)
- Medium: [PirateKingRahul](https://medium.com/@piratekingrahul)

---