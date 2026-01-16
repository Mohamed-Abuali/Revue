export interface Issue {
  rule: string;
  message: string;
  file: string;
  line: number;
  level: 'critical' | 'warning' | 'info';
  category: string;
}

export interface CodeError {
  id: string;
  errorName: string;
  errorLevel: 'critical' | 'warning' | 'info';
  errorLocation: string;
  errorCodeLine: number;
  message: string;
}
export type LocationError = Pick<CodeError,"errorLocation">