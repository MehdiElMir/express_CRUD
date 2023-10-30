const express = require("express");

const app = express();
const productrouter = require("./routes/products.routes");

app.use(express.urlencoded());

app.use("/products", productrouter);

app.listen(3000, () => console.log(`Server Running`));
