const express = require('express');  // node_module import of express
const app = express(); // Creates an Express application. 
const port = 3000; // port number 

// handling url = localhost:3000/  and http method: GET 
app.get('/', (req, res) => {
  res.send(`<html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <header>
        <nav>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </nav>
      </header>

      <h1>Welcome to My Home Page!!!</h1>
      
      <footer>
        <p>Copyright</p>
      </footer>
    </body>
  </html>`);
});

app.get('/about', ( req, res) => {
  res.send(`<html>
    <head>
      <title>About Page</title>
    </head>
    <body>
      <header>
        <nav>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </nav>
      </header>
      
      <h1>Welcome to My About Page!!!</h1>
      
      <footer>
        <p>Copyright</p>
      </footer>
    </body>
  </html>`);
});

app.get('/contact', ( req, res) => {
  res.send(`<html>
  <head>
    <title>Contact Page</title>
  </head>
  <body>
    <header>
      <nav>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </nav>
    </header>
    
    <h1>Welcome to My Contact Page!!!</h1>
    
    <footer>
      <p>Copyright</p>
    </footer>
  </body>
</html>`);
});

// TODO: Handle 404 - send valid html response with 'Page Not Found' text
// TODO: send html files as response. 

app.listen(port, () => { // setting up the app to listen on port 3000 
  console.log(`Example app listening on port ${port}`);
});