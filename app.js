// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page
app.get('/', (req, res) => {
  state={home:true}
  head={title: "Bundoran Souvenir", description:" Bundoran Souvenir - Shop", keywords:"souvenir, shop, bundoran, main street"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// login page
app.get('/login', (req, res) => {
  state={login:true}
  head={title: "Login", description:"Login to Bundoran Souvenir Shop", keywords:"login, user, account, shop"}
  // pass object to to render in "index"
  res.render('login', {state, head});
  // send this to terminal where node app is running
  console.log('login')

});


//userdetails 
app.get('/userdetails', (req, res) => {
  state={userdetails:true}
  head={title: "userdetails Bundoran Souvenir", description:" Bundoran Souvenir - Shop", keywords:"souvenir, shop, bundoran, main street"}
  // pass object to to render in "index"
  res.render('userdetails', {state, head});
  // send this to terminal where node app is running
  console.log('userdetails')

});

// about us
app.get('/about', (req, res) => {
  state={about:true}
  head={title: "About Us",description:"History of Bundoran Souvenir", keywords:"main street, bundoran, shop, souvenir"}
  // pass object to to render in "index"
  res.render('about', {state, head});
  // send this to terminal where node app is running
  console.log('about')
});

// buyIt
app.get('/buyIt', (req, res) => {
  state={buyIt:true}
  head={title: "Buy It | Bundoran Souvenir Shop", description:"Purchase Bundoran souvenirs, mugs, t-shirts, hats, maps", keywords:"buy souvenirs, mugs, t-shirts, hats, maps, Irish gifts"}
  // pass object to to render in "index"
  res.render('buyIt', {state, head});
  // send this to terminal where node app is running
  console.log('buyIt')

});

// Checkout
app.get('/checkout', (req, res) => {
  state={checkout:true}
  head={title: "checkout", description:"Checkout ", keywords:"checkout, payment, purchase, buy"}
  // pass object to to render in "index"
  res.render('checkout', {state, head});
  // send this to terminal where node app is running
  console.log('checkout')

});



// Reservartion
app.get('/booking', (req, res) => {
  state={booking:true}
  head={title: "Booking", description:"Book a table at The Blue Leaf Restaurant", keywords:"book, reservation, restaurant, food"}
  // pass object to to render in "index"
  res.render('booking', {state, head});
  // send this to terminal where node app is running
  console.log('booking')

});

// contact route
app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"contact", description:"Contact The Blue Leaf Restaurant", keywords:"contact, phone, email, restaurant, address"}
    res.render('contact', { state, head});
    console.log('contact')
  });



//Thank you  
app.get('/thank_you', (req, res) => {    
  head={title:"Thank you", description:"Thank you for booking", keywords:"thank you, booking, reservation, restaurant"}
    formDetails = {userEmail: req.query.email, userName: req.query.Name, userSurname: req.query.Surname,userSpecialRequest:req.query.special_request_text};
    res.render('thank_you', { formDetails });    
  });


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});