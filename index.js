import express from 'express';
import cors from 'cors';
import roomRouter from './Routers/roomBoookingRouter.js';
import homeRouter from './Routers/homeRouter.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json())

app.use('/',homeRouter);
app.use('/api', roomRouter);


app.listen(PORT, () => {
    console.log("App is running in the port", PORT)
})