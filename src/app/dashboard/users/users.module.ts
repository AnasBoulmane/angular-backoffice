import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DashboardModule } from '../dashboard.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, DashboardModule, UsersRoutingModule],
})
export class UsersModule {}
