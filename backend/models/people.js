const mongoose = require("mongoose");
const bcrypt = require('bcrypt')


const peopleSchema = new mongoose.Schema({
        username :String,
        password:String,
        email: String
        
})

peopleSchema.statics.matchPassword = async function (enteredPassword, password) {
   
        return await bcrypt.compare(enteredPassword, password)
      }
      
peopleSchema.pre('save', async function (next) {
        if (!this.isModified('password')) {
          next()
        }
      
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
      })
      

module.exports= mongoose.model('People', peopleSchema);