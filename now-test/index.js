const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');

const apiProxy = proxy(['/api', '/login'], {
	target: 'http://169.62.172.124:3000/'
});

app.use(apiProxy);
app.use(express.static('./build'));

const path = require('path');
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
