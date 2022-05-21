const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const axios = require("axios").default;
const auth = require("../firebase");

const controller = {
  register: async (req, res) => {
    const { email, password } = req.body;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        res.json(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.json(error);
        // ..
      });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        res.json(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.json(error);
        // ..
      });
  },
};

module.exports = controller;
