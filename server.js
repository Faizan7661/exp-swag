const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./docs/swagger");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

// Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
