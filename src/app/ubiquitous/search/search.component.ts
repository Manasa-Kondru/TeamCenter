import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'team-center-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

@Input() display_txt:any;
@Output() eventname:any = new EventEmitter();

searchhere:any;

textChange()
{
  this.eventname.emit(this.searchhere);
}

}
