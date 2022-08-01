import { IBaseLogger } from '@clean/core';
import { injectable } from 'inversify';
import { Logger, createLogger, format, transports } from 'winston';
const { combine, timestamp, prettyPrint } = format;
import {
  ConsoleTransportInstance,
  FileTransportInstance,
} from 'winston/lib/winston/transports';

@injectable()
export class Log implements IBaseLogger {
  private _logger: Logger;

  constructor() {
    this._logger = createLogger({
      format: combine(timestamp(), prettyPrint()),
      transports: [
        this.instanceTransportConsole(),
        this.instanceTransportFile(),
      ],
      exitOnError: false,
    });
  }

  private instanceTransportConsole(): ConsoleTransportInstance {
    return new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.prettyPrint(),
        format.printf((p) => `${p.level}: ${p.message}`)
      ),
    });
  }

  private instanceTransportFile(): FileTransportInstance {
    return new transports.File({
      level: 'error',
      filename: './logs/error-logs.log',
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 10,
      format: format.combine(format.prettyPrint()),
    });
  }

  private _parseMessage(error: unknown): string {
    return JSON.stringify(
      {
        message: error['message'],
        code: error['code'],
        name: error['name'],
        source: error['source'],
      },
      null,
      4
    );
  }

  public error(...args: unknown[]): void {
    args.forEach((a) => {
      if (typeof a === 'string') this._logger.error(a);
      else this._logger.error(this._parseMessage(a));
    });
  }

  public debug(...args: unknown[]): void {
    args.forEach((a) => {
      if (typeof a === 'string') this._logger.debug(a);
      else this._logger.debug(this._parseMessage(a));
    });
  }

  public info(...args: unknown[]): void {
    args.forEach((a) => {
      if (typeof a === 'string') this._logger.info(a);
      else this._logger.info(this._parseMessage(a));
    });
  }

  public warning(...args: unknown[]): void {
    args.forEach((a) => {
      if (typeof a === 'string') this._logger.warning(a);
      else this._logger.warning(this._parseMessage(a));
    });
  }
}