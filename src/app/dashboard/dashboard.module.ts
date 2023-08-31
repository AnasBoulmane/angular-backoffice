import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Command, LucideAngularModule } from 'lucide-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { PageSimpleLayoutComponent } from './components/page-simple-layout/page-simple-layout.component';
import { UserAvatarNavComponent } from './components/user-avatar-nav/user-avatar-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    FooterComponent,
    HeaderComponent,
    ModeToggleComponent,
    UserAvatarNavComponent,
    HomeComponent,
    PageSimpleLayoutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LucideAngularModule.pick({ Command }),
  ],
  exports: [
    DashboardLayoutComponent,
    PageSimpleLayoutComponent,
    ModeToggleComponent,
  ],
})
export class DashboardModule {}
