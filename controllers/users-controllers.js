const { findUsers } = require("../models/users-models");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await findUsers();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};
