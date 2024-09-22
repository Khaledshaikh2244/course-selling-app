const mongoose =  require ('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      firstName : {
        type : String,
        trim  : true,
        require :  true,
        maxlenght: 50,
    },

    lastName : {
        type : String,
        require : true,
        trim : true,
        maxlenght :50,
    },

})

const user = mongoose.model("user" , UserSchema)
module.exports = {
    user,
}