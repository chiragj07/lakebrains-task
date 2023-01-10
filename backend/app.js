const dotenv= require('dotenv');
const express =require('express');
const mongoose = require('mongoose');
const authRouter =require('./routes/user.js')
const cors = require('cors')

const app= express();
app.use(express.json())

app.use(cors())


dotenv.config({path : './config.env'});

const port=process.env.PORT;

const DB= process.env.DB;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=> console.log('database connected successfully'))
.catch(err=>console.log(err));

app.listen(port, ()=> console.log(`listening to ${port}`))

app.use(authRouter);