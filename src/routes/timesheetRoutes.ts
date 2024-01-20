import express from 'express';
import { timesheetController } from "../controllers/timesheetController";


const timehseetRouter = express.Router();


timehseetRouter
    .route('/')
    .post(timesheetController.insertEvent);

export default timehseetRouter;