import express, { Router } from 'express';
import { db } from '../config/db.config';
import { router } from '../routes/post.routes';


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/post', router);

db.then(() => {
    app.listen(3000, () => console.log('Server is listening on port 3000'));
});