import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
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

@NgModule({
  declarations: [
    EventsComponent,
    HomeComponent,
    AccordionComponent,
    CarouselComponent,
    ModalComponent,
    CollapseComponent,
    SpeedDialComponent,
    DismissComponent,
    DrawerComponent,
    DropdownComponent,
    PopoverComponent,
    TabsComponent,
    TooltipComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
