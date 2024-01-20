import express from 'express';
import eventRouter from './timesheetRoutes';

const router = express.Router();

router.get('/', (req , res ) => {
    res.send('<h3>server is running</h3> \
            <ul> \
                <li><a href="api/events/BE-Holidays">Go to BE Holidays</a></li> \
            </ul> \
            ');
})

router.use('/events', eventRouter);


export default router;

