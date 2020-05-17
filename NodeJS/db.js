const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/CrudDB' , (err) => {
    if(!err){
        console.log('MongoDb connected successfully !!!');
    }else{
        console.log('Error in DB connection: ' + JSON.stringify(err,undefined,2));
    }
});
module.exports = mongoose;