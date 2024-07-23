const express = require('express');
const router = express.Router();
const VaccinationData = require('../models/VaccinationData');

<<<<<<< HEAD
// Get all data
router.get('/vaccination-data',  async (req, res) => {
=======
router.get('/vaccination-data', async (req, res) => {
>>>>>>> 3d1793f00051704ed4e9958f469fdc1545ecf441
  try {
    const {
      national_or_jurisdictional,
      jurisdiction,
      population_group,
      measure_type,
      measure_category,
    } = req.query;

    const filters = {
      ...(national_or_jurisdictional && { national_or_jurisdictional }),
      ...(jurisdiction && { jurisdiction }),
      ...(population_group && { population_group }),
      ...(measure_type && { measure_type }),
      ...(measure_category && { measure_category }),
    };

    const data = await VaccinationData.find(filters);
    res.json(data);
  } catch (error) {
    console.error("Error fetching vaccination data:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
