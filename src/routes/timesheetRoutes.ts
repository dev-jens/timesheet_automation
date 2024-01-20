import express from 'express';
import { timesheetController } from "../controllers/timesheetController";


const timesheetRouter = express.Router();


timesheetRouter
    .route('/')
    .get(timesheetController.getData) // delete later
    .post(timesheetController.fillInTimehseet)

export default timesheetRouter;