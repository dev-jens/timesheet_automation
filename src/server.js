const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
require('dotenv').config();

const port = process.env.PORT; 

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const API_URL = 'https://api.hibob.com/api';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/postWorkedHours', async (req, res) => {
  const accessToken = req.body.apiKey;
  const year = parseInt(req.body.year);
  const month = parseInt(req.body.month);
  const hours = parseInt(req.body.hours);

  console.log(`token ${accessToken}, year ${year}, month ${month}, hours ${hours}`);
  try {
    const response = await fillTimesheet(year, month, hours, accessToken);
    res.json({ success: true, message: `Successfully filled in worked hours for the specified month.` });

  } catch (error) {
    res.status(500).json({ success: false, message: `Error filling in worked hours: ${error.message}` });
  }

});

const fillTimesheet = async (year, month, hours, accessToken) => {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
    const dayOfWeek = day.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
      const formattedDate = day.toISOString().split('T')[0];
      await postWorkedHours(formattedDate, hours, accessToken);
    }
  }
};

const postWorkedHours = async (date, hours, accessToken) => {
  try {
    const response = await axios.post(
      `${API_URL}/timesheet`,
      {
        date: date,  // Adjust this according to hibob's API requirements
        hours: hours, // Adjust this according to hibob's API requirements
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(`Successfully filled in worked hours for ${date}`);
    // Handle the response if needed
  } catch (error) {
    console.error(`Error filling in worked hours for ${date}: ${error.message}`);
    // Handle errors if needed
    throw error;
  }
};


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
