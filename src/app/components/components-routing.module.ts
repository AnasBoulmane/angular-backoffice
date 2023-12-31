import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionComponent } from './examples/accordion/accordion.component';
import { CarouselComponent } from './examples/carousel/carousel.component';
import { CollapseComponent } from './examples/collapse/collapse.component';
import { DismissComponent } from './examples/dismiss/dismiss.component';
import { DrawerComponent } from './examples/drawer/drawer.component';
import { DropdownComponent } from './examples/dropdown/dropdown.component';
import { EventsComponent } from './examples/events/events.component';
import { HomeComponent } from './examples/home/home.component';
import { ModalComponent } from './examples/modal/modal.component';
import { PopoverComponent } from './examples/popover/popover.component';
import { SpeedDialComponent } from './examples/speed-dial/speed-dial.component';
import { TabsComponent } from './examples/tabs/tabs.component';
import { TooltipComponent } from './examples/tooltip/tooltip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'speed-dial', component: SpeedDialComponent },
  { path: 'dismiss', component: DismissComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'popover', component: PopoverComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltip', component: TooltipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
