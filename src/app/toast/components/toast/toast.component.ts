import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  dismissable: boolean = true;
  dismissed: boolean = false;
  message: string = '';
  type: string = 'info';
}
