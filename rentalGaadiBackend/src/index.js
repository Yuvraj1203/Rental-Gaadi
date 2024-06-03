const express = require("express");
const app = express();

require("../conn/conn");
const RentalGaadiDb = require("../model/Gaadidb");

const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", async(req, res) => {
  const data = await  RentalGaadiDb.find();
  res.send(data);
});

app.post("/set", async (req, res) => {
  try {
    const user = new RentalGaadiDb(req.body);
    console.log(user);
    await user.save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.patch("/patch/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await RentalGaadiDb.findByIdAndUpdate(_id ,req.body,{new:true});
        res.send(data);
    } catch (error) {
      console.log(error);
    }
});

app.put("/put/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await RentalGaadiDb.findByIdAndUpdate(_id ,req.body,{new:true});
        res.send(data);
    } catch (error) {
      console.log(error);
    }
});

app.listen(port, () => {
  console.log(`listening to the port : ${port}`);
});
