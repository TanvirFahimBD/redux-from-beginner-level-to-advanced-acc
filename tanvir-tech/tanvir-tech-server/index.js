const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    // GET products
    app.get("/products", async (req, res) => {
      const products = await productCollection.find({}).toArray();
      res.send(products);
    });

    // POST product
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    //DELETE product
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // client.close();
  }
}
run().catch(() => console.log(err));

app.get("/", (req, res) => {
  res.send("Tanvir Tech Server Live ");
});

app.listen(port, (req, res) => {
  console.log(`Listen on ${port}`);
});
