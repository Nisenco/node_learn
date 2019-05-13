// var fs = require('fs');
const http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path');
// 从命令行参数获取root目录，默认是当前目录:
const root = path.resolve(process.argv[2] || '.');

function rendFilePath (filePath,req,rsp){
    return fs.stat(filePath, (err, stats) => {
        console.log(filePath,'filePath');
        if (!err && stats.isFile()) {
            rsp.writeHead('200', { 'Content-Type': 'text/html' });
            fs.createReadStream(filePath).pipe(rsp);
        } else {
            rsp.writeHead(400);
            rsp.end('404 Not Find');
        }
    })
}
http.createServer((req, rsp) => {
    var reqUrl = req.url;
    if(reqUrl == '' || reqUrl == '/'){
        reqUrl = '/index.html';
    }
    var pathName = url.parse(reqUrl).pathname;
    if(pathName == '/favicon.ico') {
        rsp.end();
    };
    filePath = path.join(root, pathName);
    rendFilePath(filePath,req, rsp);
}).listen(8080);

