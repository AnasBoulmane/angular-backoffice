import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastService } from '../../services/toast.service';
import { Toast } from '../../types/toast';

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
})
export class ToastListComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private componentRefs: Record<number, ComponentRef<any>> = {};
  private subscriptions = new Subscription();

  @ViewChild('toastContainer', { read: ViewContainerRef })
  container: ViewContainerRef = undefined as any;

  constructor(
    private toastService: ToastService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.toastService.toast$.subscribe(
        ({ toasts, created, updated, removed }) => {
          if (created?.length) this.addNewToasts(created);
          if (updated?.length) this.updateToasts(updated);
          if (removed?.length) this.removeExpiredToasts(removed);
          console.log({
            toasts: toasts.map((t) => t.id).join(', '),
            'this.toasts': this.toasts.map((t) => t.id).join(', '),
            eventType: created?.length
              ? 'created'
              : updated?.length
              ? 'updated'
              : removed?.length
              ? 'removed'
              : 'unknown',
            subscriptions: this.subscriptions,
          });
        },
      ),
    );
  }

  addNewToasts(newToasts: Toast[]) {
    // Add new toasts
    newToasts.forEach((toast) => {
      this.toasts.push(toast);
      this.loadComponent(toast);
    });
  }

  updateToasts(updatedToasts: Toast[]) {
    // Update toasts
    updatedToasts.forEach((toast) => {
      Object.assign(this.componentRefs[toast.id].instance, toast.data);
    });
  }

  removeExpiredToasts(removedToasts: Toast[]) {
    // Remove expired toasts
    removedToasts.forEach((toast) => {
      this.container.remove(
        this.container.indexOf(this.componentRefs[toast.id].hostView),
      );
      this.componentRefs[toast.id].destroy();
      delete this.componentRefs[toast.id];
      this.toasts = this.toasts.filter((t) => t !== toast);
    });
  }

  loadComponent(toast: Toast) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(toast.component);
    const componentRef = this.container.createComponent(componentFactory);
    Object.assign(componentRef.instance, toast.data); // assign data properties to component instance
    this.componentRefs[toast.id] = componentRef;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
