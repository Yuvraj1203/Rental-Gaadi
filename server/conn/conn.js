const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/rentalgaadidb")
.then(()=>console.log(`db connected`))
.catch((naam)=>console.log(`the error occurs while db conn:[ ${naam}]`));