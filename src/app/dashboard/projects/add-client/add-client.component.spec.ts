import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientComponent } from './add-client.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SvgService } from 'src/app/services/svg.service';

describe('AddClientComponent', () => {
  let component: AddClientComponent;
  let fixture: ComponentFixture<AddClientComponent>;
  const matDialogRefMock = {
    // Add any properties or methods used in the component
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientComponent ],
      imports:[ReactiveFormsModule,HttpClientModule],
       providers: [
      { provide: MatDialogRef, useValue: matDialogRefMock },
      // Other providers
      AuthService,
      SvgService
    ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
