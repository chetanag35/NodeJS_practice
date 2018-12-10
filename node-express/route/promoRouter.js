const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Will send all promotions to you!');
})
.post((req,res,next)=>{
	res.end('Will add the promotions '+ req.body.name+ ' with description ' + req.body.description);
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('PUT opereation not supported in /promotions');
})
.delete((req,res,next)=>{
	res.end('Deleting all the promotions');
}); 

promoRouter.route('/:promoId')
.get((req,res,next)=>{
	res.end('Will send ' + req.params.promoId + 'promotions to you!');
})
.post((req,res,next)=>{
	res.end('POST operation is not supported in '  + req.params.promoId);
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('Promotions ' + req.params.promoId + ' will be updated');
})
.delete((req,res,next)=>{
	res.end('Deleting ' + req.params.promoId + ' promotions ');
});

module.exports = promoRouter;