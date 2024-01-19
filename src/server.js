const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/api', router);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
