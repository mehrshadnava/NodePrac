
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware for parsing form data (optional, for form submissions)
app.use(express.urlencoded({ extended: true }));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Route for the about page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Route for form submission
app.post('/submit', (req, res) => {
  const userData = req.body.name;
  res.send(`Form submitted! Name: ${userData}`);
});

// Dynamic route for /user
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.render('user', { name: userName });
});

// Route for Sign Up page
app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' }); // Create a signup.ejs file in views
});

// Route for Login page
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' }); // Create a login.ejs file in views
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});