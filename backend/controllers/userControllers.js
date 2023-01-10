
const People = require("../models/people")
const jwt =  require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }


const registerUser = async (req, res) => {
    const { name, email, password } = req.body
  
    const userExists = await People.findOne({ email })
    console.log(userExists)
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const user = await People.create({
      name,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      })
    } else {
      res.status(400).json({message: 'Invalid user data'})

    }
  }


  const loginUser = async (req, res) => {
    const { email, password } = req.body
  
    const user = await People.findOne({ email })
  
    if (user && (await People.matchPassword(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401).json({message: 'Invalid email or password'})
    }
  }

  module.exports = {registerUser, loginUser}