import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdataComponent } from './projectdata.component';

describe('ProjectdataComponent', () => {
  let component: ProjectdataComponent;
  let fixture: ComponentFixture<ProjectdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectdataComponent]
    });
    fixture = TestBed.createComponent(ProjectdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
