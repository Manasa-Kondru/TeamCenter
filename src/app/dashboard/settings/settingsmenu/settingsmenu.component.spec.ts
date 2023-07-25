import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmenuComponent } from './settingsmenu.component';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';
import { SearchComponent } from 'src/app/ubiquitous/search/search.component';
import { matmodules } from 'src/material/material.module';

describe('SettingsmenuComponent', () => {
  let component: SettingsmenuComponent;
  let fixture: ComponentFixture<SettingsmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsmenuComponent,SearchComponent],
      imports:[UbiquitousModule,matmodules]
    });
    fixture = TestBed.createComponent(SettingsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
