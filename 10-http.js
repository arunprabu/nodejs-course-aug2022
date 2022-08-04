// Let's try powering up a server thru NodeJS

const http = require('http');

http.createServer( (req, res) => { // to handle req and process res
  console.log('Req Received');
  // console.log(req); // we can find req obj 
  console.log(req.url);
  console.log(req.method);

  // let's process the resp
  switch(req.url){
    case '/': 
      res.end(`<html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <h1>Welcome to my home page</h1>
        </body>
      </html>`);
      break;

    case '/about': 
      res.end(`<html>
        <head>
          <title>About</title>
        </head>
        <body>
          <h1>Welcome to my About page</h1>
        </body>
      </html>`);
      break;
  
    case '/contact': 
      res.end(`<html>
        <head>
          <title>Contact</title>
        </head>
        <body>
          <h1>Welcome to my Contact page</h1>
        </body>
      </html>`);
      break;

    default:
      res.end(`<html>
        <head>
          <title>404</title>
        </head>
        <body>
          <h1>404 - Page Not Found</h1>
        </body>
      </html>`);
  }
}).listen(3000, () => {
  console.log('Server is running on Port 3000. Open localhost:3000');
});