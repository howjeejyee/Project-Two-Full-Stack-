const buy = require('../model/buy');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await buy.find();
    res.render('buy', { title: 'Buy Page', products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.addToCheckout = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Buy.findById(productId);
    res.render('checkout', { title: 'Checkout Page', selectedProduct: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
