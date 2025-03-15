const express = require("express");

// Required fields per model
const requiredFields = {
  Property: ["title", "type", "description", "price", "location"],
  Blog: ["title", "content", "author"],
  Contact: ["name", "email", "message"],
};

// Dynamic field validation
const validateFields = (modelName, body) => {
  const fields = requiredFields[modelName];
  if (!fields) {
    throw new Error(`Unknown model: ${modelName}`);
  }
  const missingFields = fields.filter((field) => !body[field]);
  if (missingFields.length) {
    throw new Error(`Missing fields: ${missingFields.join(", ")}`);
  }
};

// Generic CRUD Controller
const createRoutes = (Model, modelName) => {
  const router = express.Router(); // Create new router per model

  // Create
  router.post("/", async (req, res, next) => {
    try {
      validateFields(modelName, req.body);
      const item = new Model(req.body);
      await item.save();
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  });

  // Read All
  router.get("/", async (req, res, next) => {
    try {
      const items = await Model.find();
      res.status(200).json({ success: true, data: items });
    } catch (error) {
      next(error);
    }
  });

  // Read One
  router.get("/:id", async (req, res, next) => {
    try {
      const item = await Model.findById(req.params.id);
      if (!item) {
        return res
          .status(404)
          .json({ success: false, message: "Item not found" });
      }
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  });

  // Update
  router.put("/:id", async (req, res, next) => {
    try {
      const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!item) {
        return res
          .status(404)
          .json({ success: false, message: "Item not found" });
      }
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  });

  // Delete
  router.delete("/:id", async (req, res, next) => {
    try {
      const item = await Model.findByIdAndDelete(req.params.id);
      if (!item) {
        return res
          .status(404)
          .json({ success: false, message: "Item not found" });
      }
      res.status(200).json({ success: true, message: "Item deleted" });
    } catch (error) {
      next(error);
    }
  });

  return router;
};

module.exports = createRoutes;
