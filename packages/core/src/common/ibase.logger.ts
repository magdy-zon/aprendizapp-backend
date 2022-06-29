export interface IBaseLogger {
  error(message: unknown): void;

  debug(message: unknown): void;

  info(message: unknown): void;

  warning(message: unknown): void;
}
