// const http = require('http');
// const fs = require('fs');

// const myServer=http.createServer(( req, res) => {
//     const log = `${Date.now()}:${req.url} New Request Received\n`;
//     fs.appendFile('log.txt', log, (err , data) => {
//     switch(req.url){
//         case '/': res.end('Home Page');
//         break
//         case'/about': res.end('About Page');
//         break
//         case'/contact': res.end('Contact Page');
//         break;
//         default: res.end('404 Page Not Found');
//     }
//     });
// });

// myServer.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

const http = require('http');
const myServer=http.createServer(( req, res) => {
    console.log("Request Received");
    res.end('Server is running successfully');
});

myServer.listen(5000, () => {
    console.log("Server is listening on port 5000");
});