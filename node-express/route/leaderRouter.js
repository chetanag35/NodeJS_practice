const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Will send all leaders to you!');
})
.post((req,res,next)=>{
	res.end('Will add the leader '+ req.body.name+ ' with description ' + req.body.description);
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('PUT opereation not supported in /leaders');
})
.delete((req,res,next)=>{
	res.end('Deleting all the leaders');
}); 

leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
	res.end('Will send ' + req.params.leaderId + ' to you!');
})
.post((req,res,next)=>{
	res.end('POST operation is not supported in '  + req.params.leaderId);
})
.put((req,res,next)=>{
	res.statusCode = 403;
	res.end('Leader ' + req.params.leaderId + ' will be updated');
})
.delete((req,res,next)=>{
	res.end('Deleting ' + req.params.leaderId + ' leader ');
});

module.exports = leaderRouter;