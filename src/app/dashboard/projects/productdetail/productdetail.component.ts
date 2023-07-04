import { Component } from '@angular/core';


@Component({
  selector: 'team-center-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent {





  f_panelOpenState = false;
  a_panelOpenState = false;
  d_panelOpenState = false;
  panelOpenState = false;

  app:any[]=
  [
    {
      file_name:"xxxxxxx",releaseddate:"April 14 at 10:04 am",Releasedby:"Nagendra Mudadla"
    },
    {
      file_name:"xxxxxxx",releaseddate:"April 12 at 11:04 am",Releasedby:"Abhishek Madala"
    },
    {
      file_name:"xxxxxxx",releaseddate:"April 10 at 10:31 am",Releasedby:"Rajesh Balumuri"
    },
    {
      file_name:"xxxxxxx",releaseddate:"April 8 at 11:04 am",Releasedby:"Naresh vadlani"
    },
    {
      file_name:"xxxxxxx",releaseddate:"April 5 at 11:36 am",Releasedby:"Roja Dundigalla"
    }
  ]

  product:any[]=
  [
    {
      Version:"xxxxxxxxx",Released_date:"April 14 at 10:04 am",Released_by:"Abhilash Dhammughari"
    },
    {
      Version:"xxxxxxxxx",Released_date:"April 14 at 10:04 am",Released_by:"Abhilash Dhammughari"
    },
    {
      Version:"xxxxxxxxx",Released_date:"April 14 at 10:04 am",Released_by:"Abhilash Dhammughari"
    },
    {
      Version:"xxxxxxxxx",Released_date:"April 14 at 10:04 am",Released_by:"Abhilash Dhammughari"
    },
    {
      Version:"xxxxxxxxx",Released_date:"April 14 at 10:04 am",Released_by:"Abhilash Dhammughari"
    },
  ]
}
