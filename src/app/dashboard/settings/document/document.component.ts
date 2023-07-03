import { Component } from '@angular/core';


@Component({
  selector: 'team-center-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {

  doc: any[] = [
    {value: '1', viewValue: 'Firmware'},
    {value: '2', viewValue: 'Hardware'},
    {value: '3', viewValue: 'Text Report (QA)'},
    {value: '4', viewValue: 'Apk Files'},
  ];

}
