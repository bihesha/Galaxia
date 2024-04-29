const router = require("express").Router();

const { updateUser, deleteUser, viewUserDetails } = require("../controllers/userController")

// Update a user
router.put("/update/:id", updateUser)

// Delete a single user 
router.delete("/delete/:id", deleteUser)

// Get details of a single user
router.get("/get/:id", viewUserDetails)

module.exports = router;