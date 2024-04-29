const User = require("../models/user");

// Handles updating a particular user
const updateUser = async (req, res) => {
  try {
    let userId = req.params.id;
    const {
      Fullname,
      Email,
      Password,
    } = req.body;

    const updateUser = {
      Fullname,
      Email,
      Password,
    };

    await User.findByIdAndUpdate(userId, updateUser);
    res.status(200).send({ status: "User updated" });
  } catch (error) {
    res.status(500).send({ status: "Error with updating data", error: error.message });
  }
};

// Handles deleting a particular user
const deleteUser = async (req, res) => {
  try {
    let userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).send({ status: "User deleted" });
  } catch (error) {
    res.status(500).send({ status: "Error with delete user", error: error.message });
  }
};

// Handles viewing details of a particular user
const viewUserDetails = async (req, res) => {
  try {
    let userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).send({ status: "User fetched", user });
  } catch (error) {
    res.status(500).send({ status: "Error with fetching user", error: error.message });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  viewUserDetails,
};