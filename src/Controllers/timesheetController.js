import { timesheetService } from "../Services/timesheetService"

const fillInTimehseet = (req, res) => {

  const accessToken = req.body.apiKey;
  const year = parseInt(req.body.year);
  const month = parseInt(req.body.month);
  const hours = parseInt(req.body.hours);

  timesheetService.fillTimesheet(year, month, hours, accessToken)
    .then(async (data) => {
      const response = await fillTimesheet(year, month, hours, accessToken);
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error filling in worked hours: ${error}` });
    });
};



export const eventController = { 
    fillInTimehseet,
  };