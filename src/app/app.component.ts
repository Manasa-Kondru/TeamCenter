import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SvgService } from './services/svg.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'team-center-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamcenterUI';
  constructor(private svg: SvgService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.svg.getIconData(iconRegistry, sanitizer);
  }
}
