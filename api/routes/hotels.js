const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} = require("../controlers/hotel");
const Hotel = require("../models/Hotel");
const router = require("express").Router();

// Create

router.post("/", createHotel);

//Update

router.put("/:id", updateHotel);

// Delete

router.delete("/:id", deleteHotel);

// Get
router.get("/:id", getHotel);

//Get all

router.get("/", getAllHotels);

module.exports = router;
