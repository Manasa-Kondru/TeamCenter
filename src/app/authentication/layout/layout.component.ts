import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'team-center-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public href: string = "";
  display: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    this.display = this.href === '/auth/login' || this.href === '/auth/otp' ? true : false;
    localStorage.clear();
  }

}
