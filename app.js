const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World from MacBook air, this is a test for the CI/CD with manual approvaly!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
