const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = process.env.PORT; 

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.json({mes : true});
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
