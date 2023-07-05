import { Component } from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'team-center-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private matdialog: MatDialog, private service: AuthService) {
    this.displayUsers();
  }
dataSource:any;


  displayUsers() {
    let token: any = localStorage.getItem("token");

    this.service.userData(token).subscribe((res: any)=>
    {
      console.log(res);
      this.dataSource = res.users;
    
    })
  }
  addUser() {
    this.matdialog.open(AddUserComponent)
  }


  displayedColumns: string[] = ['name', 'role', 'email','utype'];
  // dataSource = ELEMENT_DATA;

  on_change(event: any) {
    let data: any = [...this.dataSource];
    data = data.filter((ele: any) => {
      let val: any = (ele.name).toLowerCase();
      return val.includes((event).toLowerCase());
    });
    this.dataSource = [...data];
  }

}


// const ELEMENT_DATA: any[] = [
//   { name: "Nagendra Mudadla", role: "Team Lead -Android", email: 'nagendra.m@blazeautomation.com' },
//   { name: " Abhishek", role: "Sr.Software Engineer (Android)", email: 'abhishek.m@blazeautomation.com' },
//   { name: "Rajesh", role: "Team Lead (iOS)", email: 'rajesh.b@blazeautomation.com' },
//   { name: "Naresh", role: "Sr Software Engineer - iOS", email: 'naresh@blazeautomation.com' },
//   { name: "Roja", role: "Software Engineer (Android)", email: 'roja@blazeautomation.com' },
//   { name: "Srikanth", role: "QA Engineer", email: 'srikanth@blazeautomation.com' },
//   { name: "Divya Vanam", role: "Software Engineer (Web & Server)", email: 'divya.v@blazeautomation.com' },
//   { name: "Samrat Surya", role: "Software Engineer (Web & Server)", email: 'samratsurya@blazeautomation.com' },
//   { name: "Vishnu Tella", role: "Data Science Engineer", email: 'vishnu@blazeautomation.com' },
// ]




