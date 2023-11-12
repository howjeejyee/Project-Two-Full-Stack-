exports.renderHome = (req, res) => {
    const data = {
      title: 'Home Page',
    };

    router.get('/', (req, res) => {
        const currentUser = req.session.user; 
        res.render('index', { currentUser });
    });
  
    res.render('index', data);
  };
  