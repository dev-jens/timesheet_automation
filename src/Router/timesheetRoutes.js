import express from 'express';
import { timesheetController } from "../timesheetController/timesheetController";


const timehseetRouter = express.Router();


timehseetRouter
    .route('/')
    .post(timesheetController.insertEvent);