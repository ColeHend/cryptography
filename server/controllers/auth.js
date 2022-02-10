const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const exists = bcrypt.compareSync(password,users[i].password)
        if (exists) {
          let newUserObj = { ...users[i]};
          delete newUserObj.password;
          res.status(200).send(newUserObj)
        }
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    let { username, password, email, firstName, lastName } = req.body;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        res.status(400).send("already registered");
      }
    }
    
    let salt = bcrypt.genSaltSync(5);
    const passHash = bcrypt.hashSync(password, salt);
    
    let userObj = {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: passHash,
    };
    
    users.push(userObj);
    let newUserObj = { ...userObj };
    delete newUserObj.password;
    console.log(newUserObj);
    res.status(200).send(newUserObj);
  },
};
