const admin = require("firebase-admin");

const controller = {
  register: async (req, res) => {
    try {
      const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: true,
        disabled: false,
      });
      res.json(userResponse);
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res) => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controller;
