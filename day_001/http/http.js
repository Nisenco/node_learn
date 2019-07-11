const http = require('http');

http.createServer((req,rsp)=>{
    console.log(req.method,'+++',req.url);
    rsp.writeHead(200, {'Content-Type': 'text/html'});
    rsp.end('<h1>Hello world!</h1>');
}).listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');