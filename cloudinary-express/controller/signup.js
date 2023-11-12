const user = require('../model/signup');

exports.renderSignup = (req, res) => {
    const data = {
      title: 'Signup Page',
    };
  
    res.render('signup', data);
  };

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await user.create({ username, password });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
