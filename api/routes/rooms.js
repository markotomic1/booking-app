const router = require("express").Router();
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
  updateRoomAvailability,
} = require("../controlers/room");
const { verifyAdmin } = require("../utils/verifyToken");
// Create

router.post("/:hotelId", verifyAdmin, createRoom);

//Update

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// Delete

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// Get
router.get("/:id", getRoom);

//Get all

router.get("/", getAllRooms);

module.exports = router;
