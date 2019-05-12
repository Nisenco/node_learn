const fs = require('fs');
const rs = fs.createReadStream('sample.txt', 'utf-8');
const ws = fs.createWriteStream('output.txt','utf-8');
rs.on('data',(chunk)=>{
	console.log('data:');
	console.log(chunk,'chunk');

});

rs.on('end',()=>{
	console.log('end');
});

rs.pipe(ws);
console.log('777');
rs.on('error',(error)=>{
	console.log('error',error);
})
