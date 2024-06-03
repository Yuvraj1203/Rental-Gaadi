const mongoose = require('mongoose');

const gaadiSchema = new mongoose.Schema({
    name : {
        type : String
    },
    phone : {
        type : Number        
    },
});

const RentalGaadiDb = mongoose.model('gaadiSchema',gaadiSchema);

module.exports = RentalGaadiDb