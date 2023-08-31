import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-simple-layout',
  templateUrl: './page-simple-layout.component.html',
})
export class PageSimpleLayoutComponent {
  @Input() title = 'Simple Page Layout';
  @Input() hideHeading = false;
  @Input() headerSeparator = false;
}
