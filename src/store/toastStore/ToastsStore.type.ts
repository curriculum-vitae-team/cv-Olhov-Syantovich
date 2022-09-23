export interface IToast {
  severity: SeverityEnum;
  id: number;
  message: string;
}
export enum SeverityEnum {
  success = 'success',
  info = 'info',
  waring = 'warning',
  error = 'error'
}
