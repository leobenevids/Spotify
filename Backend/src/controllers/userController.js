const Users = require("../models/users");

module.exports = {

  create: async (req, res) => {
    try {
      const register = await Users.create(req.body);
      return res.status(201).json(register);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  findAll: async (req, res) => {
    try {
      const getAll = await Users.find();
      return res.status(200).json(getAll);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  getOne: async (req, res) => {
    try {
      const findOne = await Users.findById(req.params.id);
      return res.status(200).json(findOne);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  update: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const updated = await Users.findByIdAndUpdate(
        { _id: req.params.id },
        { name: name, email: email, password: password },
        { new: true }
      );
      return res.status(200).json(updated);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  },

  delete: async (req, res) => {
    try {
      const user_id = req.params.id;
      await Users.findByIdAndDelete(user_id);
      return res.status(200).json({success: "user deleted"});
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err });
    }
  }
};
