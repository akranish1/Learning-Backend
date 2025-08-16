// const https=require("http");
// const myServer=https.createServer((req,res)=>{
//     console.log(req.socket.remoteAddress);
//     res.end("Here is the Response 1");
// })

// //https.createServer((callback func for request, result));
// //8000 is a port number
// myServer.listen(8000,()=>{
//     console.log("Server Started");
// })

//to run : npm start,this will be printed: Server Started,go to chrome type: localhost:8000 and launch
//prints console.log of creatServer callback func and on client interface , it will give result

//-------------------------------------------

//lets make a log file for when client requested:

// const https=require("http");
// const fs=require("fs");

// const myServer=https.createServer((req,res)=>{
//     const log=`${Date.now()}: New Request Received from ${req.url}\n`;
//     fs.appendFile("logFile.txt",log,(err,data)=>{
//         res.end("Response from sErver")
//     })
// })
// //BY CHANGING url we get data to log file from that url
// myServer.listen(8000,()=>{
//     console.log("Server Started");
// })

//=======================================================================

//HTTP methods:
const http=require("http");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.method} ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if(req.method==='GET') res.end("HOME PAGE")
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for " + search);
        break;
      case "/signup":
        if(req.method==='GET') req.end("signup form")
        else if(req.method==='POST')
      {
        //db Query;
        req.end("Success");
      }
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started!"));