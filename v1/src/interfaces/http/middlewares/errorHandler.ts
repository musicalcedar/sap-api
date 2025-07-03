import { ErrorRequestHandler } from 'express';
import { Prisma } from '@prisma/client';
import Boom from '@hapi/boom';

export const boomErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (Boom.isBoom(err)) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
    return;
  }
  next(err);
};

export const prismaErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    console.error({
      code: err.code,
      meta: err.meta,
      message: err.message,
      stack: err.stack,
      path: req.path,
      method: req.method,
      body: req.body,
      user: req.user,
    });
    res.status(400).json({ error: 'Error de base de datos', code: err.code, details: err.meta });
    return;
  }
  next(err);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error({
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    user: req.user,
  });

  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor',
  });
};
