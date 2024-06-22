const express = require('express');

const Pizza = require('./models/pizzaModel');

const db = require("./db");
const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

app.use('/api/pizzas/' , pizzasRoute);
app.use('/api/users/' , userRoute);
app.use('/api/orders/' , ordersRoute);

app.get("/", (req, res) => {
    res.send('Hello, World!');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
