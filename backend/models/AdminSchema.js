const mongoose = require ('mongoose');

const AdminSchema = new mongoose.Schema({
    username : {
         type: String,
         require : true,

    },
    passsword : {
        type : String, 
        require : true
    },
    
})

const admin = mongoose.model("admin" , AdminSchema)
module.exports = {
    admin,
}
