import 'dotenv/config.js'
import './config/db.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index.router.js';

import { __dirname } from './utils.js';

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', indexRouter);

const notFound = (req, res, next) => {
  next(createError(404, 'route dont exist'))
}

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message
  })
}

app.use(notFound);
app.use(errorHandler);

export default app;
