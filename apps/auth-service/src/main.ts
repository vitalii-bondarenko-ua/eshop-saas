import { errorMiddleware } from '@eshop-saas/middleware/error-handler';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { authRouter } from './routes/auth.routes';
const swaggerDocument = require('./swagger-output');

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/docs-json', (req, res) => {
  res.json(swaggerDocument);
});

app.use('/api', authRouter);

const a = b;

app.use(errorMiddleware);

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`Auth service is running at http://localhost:${port}`);
  console.log(`Swagger Docs available at http://localhost:${port}/docs`);
});

server.on('error', (err) => {
  console.log('Server Error:', err);
});
