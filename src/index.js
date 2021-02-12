const jsonHandler = require('./jsonResponses.js');

const htmlHandler = require('./htmlResponses.js');

const http = require('http');

const url = require('url');


const query = require('querystring');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    
    '/' : htmlHandler.getIndexResponse,
    '/random-number' : jsonHandler.getRandomNumberResponse,
    notFound : htmlHandler.getErrorResponse
    
    
};

const onRequest = (request, response) => {

    const parsedUrl = url.parse(request.url);
    const {
        pathname
    } = parsedUrl;
    const params = query.parse(parsedUrl.query);

//    if (pathname === '/') {
//        htmlHandler.getIndexResponse(request, response)
//    } else if (pathname === '/random-number') {
//        jsonHandler.getRandomNumberResponse(request, response, params)
//    } else {
//        htmlHandler.getErrorResponse(request, response)
//    }
//    
    
    if(urlStruct[pathname]){
        urlStruct[pathname](request,response,params)
        
    }else{
        urlStruct['notFound'](request,response,params);
    }
    
    
    
    
    
    
    
    
    
    
};


http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);
