import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import messRoutes from './routes/messRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/mess', messRoutes);
app.use('/review', reviewRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017/mess-thread';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
