const checkout = require('../model/checkout');

exports.displayItems = async (req, res) => {
  try {
    const items = await checkout.find();
    const totalPrice = calculateTotalPrice(items);

    res.render('checkout', { title: 'Checkout Page', items, totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    await Checkout.findByIdAndDelete(itemId);
    res.redirect('/checkout');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
