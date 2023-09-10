var http = require('http')
var url = require('url')

 

http.createServer(function(req, res){
    
   var route = req.url

   if(route==='/'){
      res.end('this is home')
   }

   console.log('My node')
}).listen(5000)