const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { auth } = require("../firebase");

const controller = {
  register: async (req, res) => {
    const { email, password } = req.body;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("created");
        res.json("test");
        // ...
      })
      .catch((error) => {
        console.log("test");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        res.json(error.message);
        // ..
      });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        res.json(user);
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        console.log(error.message);
        res.json(error.message);
        // ..
      });
  },
};

module.exports = controller;
