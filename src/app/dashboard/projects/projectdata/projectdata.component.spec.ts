import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdataComponent } from './projectdata.component';
import { matmodules } from 'src/material/material.module';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';
import { SvgService } from 'src/app/services/svg.service';

describe('ProjectdataComponent', () => {
  let component: ProjectdataComponent;
  let fixture: ComponentFixture<ProjectdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectdataComponent],
      imports:[matmodules,HttpClientModule,UbiquitousModule],
      providers:[AuthService,SvgService]
      
    });
    fixture = TestBed.createComponent(ProjectdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
