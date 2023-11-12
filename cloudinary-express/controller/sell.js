const Product = require('../model/sell');

exports.renderSell = (req, res) => {
  res.render('sell', { title: 'Sell Page' });
};

exports.addProduct = async (req, res) => {
    const { productName, quantity, price, category } = req.body;
  
    try {
      const newProduct = await Product.create({
        productName,
        quantity,
        price,
        category,
      });
  
      res.render('sell', { title: 'Sell Page', successMessage: 'Product added successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

