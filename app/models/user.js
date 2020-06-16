const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 6,
        maxlength: 63
      
    },
    email: {
        type: String,
        required: true,
         
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    }, 
    password: {
        type: String, 
        required: true,
        minlength: 8,
        maxlength: 166
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User