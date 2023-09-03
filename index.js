const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const dbConnect = require('./config/database');
var cors = require('cors');
require('dotenv').config();

app.use(
    cors({
        origin : "*"
    })
)

app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})

app.use('/api/v1/user', userRouter);

dbConnect();

app.get('/', (req, res)=>{
    res.send("<h1>This is Home Page</h1>");
})
