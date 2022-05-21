const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const axios = require("axios").default;

const controller = {
  register: (req, res) => {
    getAuth()
      .createUser({
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
        throw error;
      });
  },

  login2: async (req, res) => {
    /* try {
        const {uid} = req.body
        const getUser = await admin.auth().getUser(uid);
        res.json(getUser);
      } catch (error) {
        console.log(error);
       
      } */
    const { uid } = req.body;
    await getAuth()
      .getUser(uid)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        res.json(userRecord);
        console.log(`Successfully fetched user data`);
      })
      .catch((error) => {
        error.status = 400;
        error.code = 400;
        console.log("Error fetching user data:", error);
        res.json({
          code: error.code,
          message: error,
        });
      });
  },

  login: async (req, res) => {
    
    url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.FIREBASE_APIKEY;
    console.log()
    await axios
      .post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.FIREBASE_APIKEY, {
            email: req.body.email,
            password: req.body.password,
          
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        status: 404;
        console.log(error.message);
        res.json(error);
      });
  },
};

module.exports = controller;
