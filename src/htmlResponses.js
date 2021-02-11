
const indexPage = `
<html>
  <head>
    <title>Random Number Web Service</title>
  </head>
  <body>
    <h1>Random Number Web Service!!!</h1>
<h2>Core Skils 11</h2>
    <p>
      Random Number Web Service - the endpoint is here --> 
      <a href="/random-number">random-number</a> or <a href="/random-number?max=10">random-number?max=10</a>
    </p>
  </body>
</html>`;

const errorPage = `
<html>
  <head>
    <title>404 File Not Found</title>
  </head>
  <body>
    <h1>404 - File Not Found</h1>
    <p>
      Check your URL, or your typing!!
</p>
<p> :-O </p>
</body>
</html>`;

const getErrorResponse = (request,response) => {
    
     response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        response.write(errorPage);
        response.end();
    
}

const getIndexResponse = (request,response) => {
    
     response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        response.write(indexPage);
        response.end();
    
}

module.exports = {
    
    getErrorResponse,
    getIndexResponse
    
}