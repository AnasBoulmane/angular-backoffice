import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ChevronLeft,
  Command,
  Loader2,
  // File,
  // Home,
  LucideAngularModule,
  // Menu,
  // UserCheck,
} from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from './toast/toast.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserAuthFormComponent } from './auth/components/user-auth-form/user-auth-form.component';
import { AccordionComponent } from './examples/accordion/accordion.component';
import { CarouselComponent } from './examples/carousel/carousel.component';
import { CollapseComponent } from './examples/collapse/collapse.component';
import { DismissComponent } from './examples/dismiss/dismiss.component';
import { DrawerComponent } from './examples/drawer/drawer.component';
import { DropdownComponent } from './examples/dropdown/dropdown.component';
import { EventsComponent } from './examples/events/events.component';
import { ModalComponent } from './examples/modal/modal.component';
import { PopoverComponent } from './examples/popover/popover.component';
import { SpeedDialComponent } from './examples/speed-dial/speed-dial.component';
import { TabsComponent } from './examples/tabs/tabs.component';
import { TooltipComponent } from './examples/tooltip/tooltip.component';
import { DashbordLayoutComponent } from './home/components/dashbord-layout/dashbord-layout.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { HeaderComponent } from './home/components/header/header.component';
import { ModeToggleComponent } from './home/components/mode-toggle/mode-toggle.component';
import { UserAvatarNavComponent } from './home/components/user-avatar-nav/user-avatar-nav.component';
import { HomeComponent } from './home/home.component';

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
    LoginComponent,
    UserAuthFormComponent,
    HeaderComponent,
    FooterComponent,
    UserAvatarNavComponent,
    DashbordLayoutComponent,
    ModeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    LucideAngularModule.pick({ ChevronLeft, Command, Loader2 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
