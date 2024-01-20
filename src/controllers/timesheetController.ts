import { Request, Response } from 'express';
import { timesheetService } from "../services/timesheetService"

const fillInTimehseet = (req : Request, res : Response) => {

  const userID: string = req.body.userID;
  const accessToken : string = req.body.apiKey;
  const year : number = parseInt(req.body.year);
  const month: number = parseInt(req.body.month);

  timesheetService.fillTimesheetIn(year, month, accessToken, userID)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.status(402).json({ error: err });
  });

  res.redirect("http://localhost:3000/")
 
};

//delete later
const getData = (req : Request, res : Response) => {
  console.log("getData");
  res.status(200).json({ data: "data" });
};

export const timesheetController = { 
    fillInTimehseet,
    getData
  };
