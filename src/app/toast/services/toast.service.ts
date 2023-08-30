import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

import { Toast } from '../types/toast';

interface ToastsChange {
  toasts: Toast[];
  created?: Toast[];
  updated?: Toast[];
  removed?: Toast[];
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastCounter = 0;
  private toastsSubject = new Subject<ToastsChange>();
  private toasts: Toast[] = [];

  toast$ = this.toastsSubject.asObservable();

  show(component: Type<any>, data?: any, duration = 3000): void {
    const toast: Toast = { component, data, duration, id: ++this.toastCounter };
    this.toasts.push(toast);
    this.toastsSubject.next({ toasts: this.toasts, created: [toast] });

    setTimeout(() => {
      this.dismiss(toast);
      setTimeout(() => this.remove(toast), 100);
    }, duration);
  }

  private dismiss(toast: Toast): void {
    toast.data.dismissed = true;
    this.toastsSubject.next({ toasts: this.toasts, updated: [toast] });
  }

  private remove(toast: Toast): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
    this.toastsSubject.next({ toasts: this.toasts, removed: [toast] });
  }
}
