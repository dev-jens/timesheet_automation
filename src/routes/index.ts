import express from 'express';
import timesheetRouter from './timesheetRoutes';

const router = express.Router();


router.use("/timesheet",timesheetRouter);


export default router;

