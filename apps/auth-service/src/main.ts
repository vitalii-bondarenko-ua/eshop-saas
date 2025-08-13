import { errorMiddleware } from '@eshop-saas/middleware/error-handler';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3005'],
    allowedHeaders: ['Authorization', 'Content-Type'],
  })
);

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use(errorMiddleware);

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`Auth service is running at http://localhost:${port}`);
});

server.on('error', (err) => {
  console.log('Server Error:', err);
});
