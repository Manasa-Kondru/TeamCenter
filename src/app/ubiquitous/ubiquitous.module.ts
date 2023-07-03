import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { matmodules } from 'src/material/material.module';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ...matmodules
  ],
  exports: [
    SearchComponent
  ]
})
export class UbiquitousModule { }
