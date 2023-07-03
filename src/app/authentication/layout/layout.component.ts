import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'team-center-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

    
  public href: string = "";

  constructor(private router: Router) {}
display :boolean=false;
  ngOnInit() {
    this.href = this.router.url;
    if(this.href==='/auth/login' || this.href === '/auth/otp')
   this.display = true;
    else
    this.display=false;
     console.log(this.router.url);
   }

}
