import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastListComponent } from './components/toast-list/toast-list.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [ToastComponent, ToastListComponent],
  imports: [CommonModule],
  exports: [ToastListComponent],
})
export class ToastModule {}
