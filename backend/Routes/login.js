import express from 'express';
import User from '../models/user.models.js'; 

const loginrouter = express.Router();

loginrouter.post('/login', async (req, res) => {
  try {
    const { username, fullname, password, email } = req.body;

    
    if (!username || !fullname || !password || !email) {
      return res.status(400).send({ message: 'All fields are required' });
    }

    const newUser = new User({ username, fullname, password, email });
    await newUser.save();

    res.status(201).send({ message: 'User saved successfully!' });
    console.log(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send({ message: 'Error saving user', error });
  }
});

export default loginrouter;
