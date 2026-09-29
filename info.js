const fs = require('node:fs/promises');
const http= require('http');
const path = require('path');

const PORT = 8080;

const server = http.createServer(async (req,res)=>{
    try{
    if (req.url === '/'){
      const route= path.join(__dirname,'index.html');
      const data=await fs.readFile(route,{encoding:'utf8'});
      res.writeHead(200,{ 
        'Content-Type': 'text/html',
    });
      res.end(data);
    }
    else if(req.url === '/about.html'){
        const route=path.join(__dirname, 'about.html');
        const data=await fs.readFile(route,{encoding:'utf-8'});
        res.writeHead(200,{
            'Content-Type': 'text/html',
        });
        res.end(data);
    }
    else if(req.url === '/contact-me.html'){
        const route=path.join(__dirname,'contact-me.html');
        const data=await fs.readFile(route, {encoding:'utf-8'});
        res.writeHead(200,{
            'Content-Type': 'text/html',
        });
        res.end(data);
    }
    else{
        const route=path.join(__dirname,'404.html');
        const data=await fs.readFile(route,{encoding:'utf-8'});
        res.writeHead(404,{
            'Content-Type': 'text/html', 
        });
        res.end(data);
    }
}
catch(error){
    res.writeHead(500,{
        'Content-Type': 'text/plain',
    });
    res.end('server error');
    console.error(error);
}
})

server.listen(PORT);