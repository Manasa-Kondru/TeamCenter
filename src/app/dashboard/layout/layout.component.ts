// import { Component, Output, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// @Component({
//   selector: 'team-center-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.scss']
// })
// export class LayoutComponent implements OnInit {

//   image: any = "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1690375137~exp=1690375737~hmac=1cd5ea9bf0c4fc6c1879764613adc63cab934698877969b985086aab91c89287"
//   recents: any;
//   base_url = "http://192.168.100.13:5000";
//   isDrawerOpened = true;
//   isActive = "false";
//   link = this.router.url;
//   userinfo: any;
//   uploads: any = [];
//   url: string | ArrayBuffer | null | undefined;

//   constructor(private router: Router, private service: AuthService, private breakpointObserver: BreakpointObserver) { }

//   routeTo() {
//     this.router.navigate(['/auth']);
//     localStorage.clear();
//   }

//   ngOnInit(): void {
//     this.service.getNavInfo().subscribe((res: any) => {
//       this.userinfo = res;
//     });


//     this.service.recents().subscribe((res: any) => {
//       this.recents = res.recentFiles;

//     })

//     this.breakpointObserver.observe(Breakpoints.XSmall)
//       .subscribe(result => {
//         this.isDrawerOpened = result.matches ? false : true;
//       });
//   }

//   getUrl() {
//     return `${this.base_url}${this.userinfo.photo}`;
//   }

 
//   onSelectedFile(event: any) {
//     if (event.target.files && event.target.files[0]) {
//       var reader = new FileReader();
//       reader.readAsDataURL(event.target.files[0]);
//       reader.onload = (event: any) => {
//         this.url = event.target.result;
//       }
//     }
//   }

//   saveImage(e: any) {
//     let totalFiles = e.target.files;
//     if (totalFiles.length > 0) {
//       for (let i = 0; i < totalFiles.length; i++) {
//         let file = totalFiles[i];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = (e: any) => {
//           let url: any = e.target.result;
//           this.uploads.push(url);
//         }
//       }
//     }
//   }



// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'team-center-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  image = "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1690375137~exp=1690375737~hmac=1cd5ea9bf0c4fc6c1879764613adc63cab934698877969b985086aab91c89287";
  recents: any;
  base_url = "http://192.168.100.13:5000";
  isDrawerOpened = true;
  link: string = this.router.url;
  userinfo: any;
  uploads: string[] = [];
  url: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private service: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}

  routeTo() {
    this.router.navigate(['/auth']);
    localStorage.clear();
  }

  ngOnInit(): void {
    this.service.getNavInfo().subscribe((res: any) => {
      this.userinfo = res;
    });

    this.service.recents().subscribe((res: any) => {
      this.recents = res.recentFiles;
    });

    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .subscribe(result => {
        this.isDrawerOpened = !result.matches;
      });
  }

  getUrl(): string {
    return `${this.base_url}${this.userinfo.photo}`;
  }

  onSelectedFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.readAndDisplayImage(event.target.files[0]);
    }
  }

  saveImage(event: any): void {
    const totalFiles = event.target.files;
    if (totalFiles.length > 0) {
      for (const file of totalFiles) {
        this.readAndDisplayImage(file);
      }
    }
  }

  private readAndDisplayImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.uploads.push(event.target.result);
    };
  }
}

