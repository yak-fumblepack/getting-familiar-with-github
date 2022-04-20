const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (_, res) => {
	res.send('Hello World');
});

const links = [{name: 'omaygat', id: 'kjX9dFr_5PM'}, {name: 'rick', id: 'dQw4w9WgXcQ'}]

app.get('/links/:name', (req, res) => {
	const { name } = req.params;
	const id = links.filter((id) => id.name === name)[0];
	res.json({id});
})

app.post('/addlink', (req, res) => {
	const { name, id } = req.body;
	if (name && id) {
		links.push({ name, id });
		res.json({name, id});
	}
});

app.listen(port, () => {
	console.log('server is running on port: ' + port)
});