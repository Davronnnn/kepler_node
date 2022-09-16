const http = require('http');

const PORT = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
	console.log(req, res);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(
		JSON.stringify({
			id: 1,
			name: 'Davron',
		})
	);
});

server.listen(PORT, () => {
	console.log('server is running' + ' on port ' + PORT);
});
