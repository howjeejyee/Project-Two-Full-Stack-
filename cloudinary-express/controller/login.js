const Login = require('../model/login');

exports.renderLogin = (req, res) => {
  const data = {
    title: 'Login Page',
  };

  res.render('login', data);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = (password === user.password);

    if (isPasswordValid) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
