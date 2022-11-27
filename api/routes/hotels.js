const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
} = require("../controlers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");
const router = require("express").Router();

// Create

router.post("/", verifyAdmin, createHotel);

//Update

router.put("/:id", verifyAdmin, updateHotel);

// Delete

router.delete("/:id", verifyAdmin, deleteHotel);

// Get
router.get("/find/:id", getHotel);

//Get all

router.get("/", getAllHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

module.exports = router;
