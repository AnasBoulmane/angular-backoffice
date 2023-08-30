import { Type } from '@angular/core';

export interface Toast {
  id: number;
  component: Type<any>;
  data?:
    | any
    | {
        message: string;
        dismissable: boolean;
        type: 'success' | 'info' | 'warning' | 'error';
      };
  duration?: number;
}
