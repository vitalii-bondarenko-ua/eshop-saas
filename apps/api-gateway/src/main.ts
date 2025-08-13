import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import proxy from 'express-http-proxy';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3005'],
    allowedHeaders: ['Authorization', 'Content-Type'],
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());
app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: (req: express.Request & { user?: unknown }) => (req.user ? 1000 : 100),
  message: {
    error: 'Too many requests, please try again later!',
  },
  standardHeaders: true,
  legacyHeaders: true,
  keyGenerator: (req: express.Request) => req.ip || 'unknown',
});

app.use(limiter);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-gateway!' });
});

app.use('/', proxy(['http://localhost:6001']));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
