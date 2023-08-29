import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionComponent } from './accordion/accordion.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DismissComponent } from './dismiss/dismiss.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
