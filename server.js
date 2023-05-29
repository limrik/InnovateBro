const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const connection_string = process.env.MONGO_URL;
const port = process.env.PORT || 3001;

const bcryptSalt = bcrypt.genSaltSync(10);

mongoose
  .connect(connection_string)
  .then(() => console.log("mongoDB connection success!"))
  .catch((err) => console.log(err));

require("./users");
const collection = mongoose.model("users");

module.exports = collection;


app.get("/", (req, res) => {
  res.send("Express is here");
});

app.post("/", async (req, res) => {
    const { name, email, password } = req.body;
  
    const data = {
      name: name,
      email: email,
      password: password,
    };
  
    try {
      const check = await collection.findOne({ email: email });
  
      if (check) {
        const passOk = bcrypt.compareSync(password, check.password);
        if (passOk) {
          jwt.sign(
            { email: check.email, id: check._id },
            jwtSecret,
            {},
            (err, token) => {
              if (err) throw err;
              res.cookie("token", token).json("pass ok");
            }
          );
        } else {
          res.json("pass not ok");
        }
      } else {
        res.json("does not exist");
      }
    } catch (e) {
      res.json("does not exist");
    }
  });
  
  app.post("/registerUser", async (req, res) => {
    const { name, email, password } = req.body;
  
    const data = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, bcryptSalt),
    };
  
    try {
      const check = await collection.findOne({ email: email });
  
      if (check) {
        res.json("exist");
      } else {
        res.json("does not exist");
        await collection.insertMany([data]);
      }
    } catch (e) {
      res.json("does not exist");
    }
  });
  
  app.listen(3001, function () {
    console.log(`Server is running on port ${port}`);
  });