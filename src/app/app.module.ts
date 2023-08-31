import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ChevronLeft,
  Loader2,
  // File,
  // Home,
  LucideAngularModule,
  // Menu,
  // UserCheck,
} from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ToastModule } from './toast/toast.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserAuthFormComponent } from './auth/components/user-auth-form/user-auth-form.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, UserAuthFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    DashboardModule,
    LucideAngularModule.pick({ ChevronLeft, Loader2 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
