import express, { Express, Request, Response } from 'express';
import { defaultConfig } from './config/default.config';
import router from './routes/index';


const PORT = defaultConfig.PORT || 3000;
const app: Express = express();


//middleware
app.use(express.json());


//routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/api`);
});


