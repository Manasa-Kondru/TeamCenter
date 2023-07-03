import { Component,Output,Input,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'team-center-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private router:Router)
   {
  //   console.log(this.link);
  //   if( this.link == '/dashboard/projects/projectdata')
  //   {
  //     this.somecontent="Search here for Devices and Projects";
  //   }
  //   else if(this.link == "/dashboard/users")
  //   {
  //     this.somecontent="Search here for Users";
  //   }
  //   else if(this.link == "/dashboard/settings/settingsmenu")
  //   {
  //     this.somecontent="Find the settings...";
  //   }
  }
isActive="false";
link = this.router.url;


handleSearch(searchTerm: string) {
  console.log('Searching for:', searchTerm);
  // Perform search logic or update data based on the search term
}

// @Output() searchEvent = new EventEmitter<string>();

// searchTerm: string="";
// somecontent: string=" ";

// search() {
//   this.searchEvent.emit(this.searchTerm);
// }


// routeToProjects()
// {
  
// this.somecontent="Search here for Devices and Projects";

// }
// routeToUsers()
// {
//   this.somecontent="Search here for Users"
// }

// routeToSettings()
// {
//   this.somecontent="Find the settings..."
// }

recents:any[]=[

  {
    Name:'Latest Firmware released by Embeded team',
    version:'Version: xxxxxxxxxxxxx' ,
    date:'Date: 24-04-2023 ',
    time:'Time: 11:23 am'
  },
  {
    Name:'Latest Firmware released by Embeded team',
    version:'Version: xxxxxxxxxxxxx' ,
    date:'Date: 24-04-2023 ',
    time:'Time: 11:23 am'
  },
  {
    Name:'Latest Firmware released by Embeded team',
    version:'Version: xxxxxxxxxxxxx' ,
    date:'Date: 24-04-2023 ',
    time:'Time: 11:23 am'
  }
]



}
