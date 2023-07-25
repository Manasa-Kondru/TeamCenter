import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserComponent } from './add-user.component';
import { matmodules } from 'src/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
 // Import your AuthService
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgService } from 'src/app/services/svg.service';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  const matDialogRefMock = {
    // Add any properties or methods used in the component
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports:[matmodules,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefMock },
        AuthService ,SvgService       // Other providers
      ],


    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
