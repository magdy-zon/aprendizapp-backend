import { inject, injectable } from 'inversify';
import { BASETYPES, IBaseLogger } from '@clean/core';

@injectable()
export class MyStream {
  constructor(@inject(BASETYPES.Log) private _logger: IBaseLogger) {}

  public write(text: string): void {
    this._logger.info(text);
  }
}
