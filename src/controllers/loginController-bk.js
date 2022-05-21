const admin = require("firebase-admin");
//const { getAuth } = require('firebase-admin/auth');


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
        const {uid} = req.body
        const getUser = await admin.auth().getUser(uid);
        res.json(getUser);
      } catch (error) {
        console.log(error.status);
      }

    /* getAuth()
      .getUser(uid)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log(`Successfully fetched user data: ${JSON.stringify(userRecord)}`);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      }); */
  },
};

module.exports = controller;
