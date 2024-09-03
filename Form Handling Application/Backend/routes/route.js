const express = require("express");
const router = express.Router();
const RegForm = require("../models/RegForm.js");

// Route to create a new Employee
router.post("/newEmployees", async (req, res) => {
  try {
    const newEmployee = new RegForm(req.body);
    const saved = await newEmployee.save();
    if (saved) {
      res
        .status(201)
        .json({ message: "Data Submitted Successfully", newEmployee });
    } else {
      res.status(404).json({ error: "error occurs" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error Occurs", error });
  }
});


// Route to fetch information of a Employee
router.get("/newEmployees", async (req, res) => {
  try {
    const data = await RegForm.find();
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error Occurs", error });
  }
});

// Route to delete an Employee using id
router.delete("/newEmployees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await RegForm.findByIdAndDelete(id);
     if (!data) {
       return res.status(404).json({ message: "Employee not found" });
     }
    res.status(200).json({ message: "Data Deleted Successfully ", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error Occurs ", error });
  }
});

// Updated Employee data using id
router.patch("/newEmployees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await RegForm.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      message: " Data Updated Successfully in Employee Database", data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: " Server Error Occurs in Employee Database ", error });

  }
});



// Route to fetch information of a Employee by id
router.get("/newEmployees/:id", async (req, res) => {
  try {
    const data = await RegForm.findById(req.params.id);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error Occurs", error });
  }
});




module.exports = router;
