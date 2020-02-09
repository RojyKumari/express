const express = require('express');
const bodyParser = require('body-parser');

const { bookRouter } = require('./routers');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

app.listen(port, () => console.log(`Listening on....${port}`));
