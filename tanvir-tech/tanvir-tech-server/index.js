const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hqjnl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const productCollection = client.db("techDb").collection("products");

    app.get("/products", async (req, res) => {
      const products = await productCollection.find({}).toArray();
      res.send(products);
    });

    app.post("/products", async (req, res) => {
      const product = req.body;
      console.log("product", product);
      const result = await productCollection.insertOne(product);
      console.log("result", result);
      res.send(result);
    });
  } finally {
    // client.close();
  }
}
run().catch(() => console.log(err));

app.get("/", (req, res) => {
  res.send("Tanvir Tech Live server running");
});

app.listen(port, (req, res) => {
  console.log(`Listen on ${port}`);
});
