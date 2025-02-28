const express = require('express');

const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./route/dishRouter');
const promoRouter = require('./route/promoRouter');
const leaderRouter = require('./route/leaderRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/dishes/:dishId',dishRouter);

app.use('/promotions',promoRouter);
app.use('/promotions/:promoId',promoRouter);

app.use('/leaders',leaderRouter);
app.use('/leaders/:leaderId',leaderRouter);
app.use(express.static(__dirname+ '/public'));

app.use((req,res,next)=>{
	//console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>This is an express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname,( )=>{
	console.log(`Server running at http://${hostname}:${port}`);
});