import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'team-center-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private service: AuthService) {

  }
  ngOnDestroy(): void {
    // localStorage.removeItem("token");
  }

  routeTo() {
    this.router.navigate(['/auth']);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }
  isActive = "false";
  link = this.router.url;

  userinfo: any = { "user_name": '' };
  ngOnInit(): void {
    this.service.getNavInfo().subscribe((res: any) => {
      this.userinfo = res;

    }
    )
  }



  handleSearch(searchTerm: string) {
    console.log('Searching for:', searchTerm);

  }



  recents: any[] = [

    {
      Name: 'Latest Firmware released by Embeded team',
      version: 'Version: xxxxxxxxxxxxx',
      date: 'Date: 24-04-2023 ',
      time: 'Time: 11:23 am'
    },
    {
      Name: 'Latest Firmware released by Embeded team',
      version: 'Version: xxxxxxxxxxxxx',
      date: 'Date: 24-04-2023 ',
      time: 'Time: 11:23 am'
    },
    {
      Name: 'Latest Firmware released by Embeded team',
      version: 'Version: xxxxxxxxxxxxx',
      date: 'Date: 24-04-2023 ',
      time: 'Time: 11:23 am'
    }
  ]

  uploads: any = [];

  saveImage(e: any) {
    let totalFiles = e.target.files;
    if (totalFiles.length > 0) {
      for (let i = 0; i < totalFiles.length; i++) {
        let file = totalFiles[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
          let url: any = e.target.result;
          this.uploads.push(url);
        }
      }
    }
  }



}
