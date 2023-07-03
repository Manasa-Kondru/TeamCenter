import { Component } from '@angular/core';

@Component({
  selector: 'team-center-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'role', 'email'];
  dataSource = ELEMENT_DATA;

  on_change(event: any) {
    let data: any = [...ELEMENT_DATA];
    data = data.filter((ele: any) => {
      let val: any = (ele.name).toLowerCase();
      return val.includes((event).toLowerCase());
    });
    this.dataSource = [...data];
  }

}


const ELEMENT_DATA: any[] = [
  { name: "Nagendra Mudadla", role: "Team Lead -Android", email: 'nagendra.m@blazeautomation.com' },
  { name: " Abhishek", role: "Sr.Software Engineer (Android)", email: 'abhishek.m@blazeautomation.com' },
  { name: "Rajesh", role: "Team Lead (iOS)", email: 'rajesh.b@blazeautomation.com' },
  { name: "Naresh", role: "Sr Software Engineer - iOS", email: 'naresh@blazeautomation.com' },
  { name: "Roja", role: "Software Engineer (Android)", email: 'roja@blazeautomation.com' },
  { name: "Srikanth", role: "QA Engineer", email: 'srikanth@blazeautomation.com' },
  { name: "Divya Vanam", role: "Software Engineer (Web & Server)", email: 'divya.v@blazeautomation.com' },
  { name: "Samrat Surya", role: "Software Engineer (Web & Server)", email: 'samratsurya@blazeautomation.com' },
  { name: "Vishnu Tella", role: "Data Science Engineer", email: 'vishnu@blazeautomation.com' },
]




