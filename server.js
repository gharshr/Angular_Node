var http = require("http");
var fs = require("fs");  

http.createServer(function (rq,rs) {
	rs.writeHead(200,{'Content-Type': 'text/plain'});	
	url = rq.url.split("/");
	console.log(url);
	if(url[1] == 'empdetails')
	{
		data = fs.readFileSync('trainees.json');
		data = JSON.parse(data);
		rs.write(JSON.stringify(data[url[2]]));
		rs.end();
	}
}).listen(2121);

console.log('Server running at http://127.0.0.1:2121');