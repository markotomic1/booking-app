const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controlers/user");
const User = require("../models/User");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");
const router = require("express").Router();

// Check token

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user you are loged in");
// });
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user you are loged in and dev");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin you are loged in and dev");
// });

//Update

router.put("/:id", verifyUser, updateUser);

// Delete

router.delete("/:id", verifyUser, deleteUser);

// Get
router.get("/:id", verifyUser, getUser);

//Get all

router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
