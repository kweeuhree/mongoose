const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
const connectToDb = require('./config/connectToDb');
const fruitsRouter = require('./routes/fruitRouter');

//middleware
app.use(express.json()); //json parser
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

//database connection
connectToDb();

//routes
app.use('/fruits', fruitsRouter);

//listen 
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
})