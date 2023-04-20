import winston from 'winston';
import {isString} from '../type-guards';

const logFormat = winston.format.printf((info) => {
  const message =
    typeof info.message === 'object'
      ? JSON.stringify(info.message, null, 4)
      : info.message;
  const meta = info.meta ? JSON.stringify(info.meta, null, 4) : null;
  return (
    [`[${info.timestamp}] ${info.level}: ${message}`, meta, info.stack]
      .filter(isString)
      .join('\n') + '\n'
  );
});

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        logFormat
      ),
    }),
  ],
});
