import express from 'express';
import cors from 'cors';
const app = express();

//basic config
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',')  || "http://localhost:5173",
    credentials: true,
    methods : ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))


// import route

import healthCheckRouter from './routes/healthCheck.route.js';

app.use("/api/v1/healthcheck", healthCheckRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})




export default app;