import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { DashboardModule } from '../dashboard.module';

@NgModule({
  declarations: [OrganizationsComponent],
  imports: [CommonModule, DashboardModule, OrganizationsRoutingModule],
})
export class OrganizationsModule {}
