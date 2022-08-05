const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => { // to handle req and process res
  console.log('Req Received');
  // console.log(req); // we can find req obj 
  console.log(req.url);
  console.log(req.method);

  switch(req.url){
    case '/': 
      fs.readFile('./index.html', function (error, htmlContent) {
        if (!error) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(htmlContent);
        } else {
          res.write('some error occured');
        }
        res.end();
      });
      break;

    case '/about': 
      fs.readFile('./about.html', function (error, htmlContent) {
        if (!error) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(htmlContent);
        } else {
          res.end('some error occured');
        }
        res.end();
      });
      break;

    case '/contact': 
      fs.readFile('./contact.html', function (error, htmlContent) {
        if (!error) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(htmlContent);
        } else {
          res.end('some error occured');
        }
        res.end();
      });
      break;

    default: 
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Page Not Found');
  }

}).listen(3000, () => {
  console.log('Server is running on Port 3000. Open localhost:3000');
});