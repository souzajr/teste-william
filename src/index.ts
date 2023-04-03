import express from 'express';
import 'dotenv/config';
import { syncDb } from './config/database';

syncDb();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log('\x1b[41m\x1b[37m', `SERVER RUNNIG ON PORT ${port}`, '\x1b[0m')
);
