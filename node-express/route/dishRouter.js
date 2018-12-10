const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Will send all dish to you!');
})
.post((req,res,next)=>{
	res.end('Will add the dish '+ req.body.name+ ' with description ' + req.body.description);
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('PUT opereation not supported in /dishes');
})
.delete((req,res,next)=>{
	res.end('Deleting all the dishes');
}); 

dishRouter.route('/:dishId')
.get((req,res,next)=>{
	res.end('Will send ' + req.params.dishId + ' to you!');
})
.post((req,res,next)=>{
	res.end('POST operation is not supported in '  + req.params.dishId);
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('Dish ' + req.params.dishId + ' will be updated');
})
.delete((req,res,next)=>{
	res.end('Deleting ' + req.params.dishId + ' dish ');
});

module.exports = dishRouter;