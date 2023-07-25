import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { matmodules } from 'src/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgService } from 'src/app/services/svg.service';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  const matDialogRefMock = {
    // Add any properties or methods used in the component
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadComponent ],
      imports:[matmodules,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefMock },
           // Other providers
           SvgService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
