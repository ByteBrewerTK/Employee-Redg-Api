const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_STRING, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("DB Successfully Connected")})
    .catch(error =>{
        console.log("Error occure at the time of connecting with DB");
        console.error(error.message);
    })

}

module.exports = dbConnect;