const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const createRoutes = require("./routes/crudRoutes");

// Import Models
const Property = require("./models/Property");
const Blog = require("./models/Blog");
const Contact = require("./models/Contact");
const cors = require("cors");
// Load environment variables
dotenv.config();
connectDB();

// Init App
const app = express();
app.use(express.json());
app.use(cors());
// Routes 
app.use("/api/properties", createRoutes(Property, "Property"));
app.use("/api/blogs", createRoutes(Blog, "Blog"));
app.use("/api/contacts", createRoutes(Contact, "Contact"));

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
