const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        console.log('home page');
        res.write('we are in the home page');
        res.end();
    }
    if(req.url==='/about'){
        console.log('about page');
        res.write('this is teh about page');
        res.end();
    }
    res.end(`
        <h1>page doesn't exist</h1>
        <a href="/"> back home</a>
    `)
});

server.listen(5000);