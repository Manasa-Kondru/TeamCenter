import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpComponent } from './otp.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgService } from 'src/app/services/svg.service';

describe('OtpComponent', () => {
  let component: OtpComponent;
  let fixture: ComponentFixture<OtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpComponent],
      imports:[HttpClientModule,ReactiveFormsModule],
      providers:[AuthService,SvgService]
    });
    fixture = TestBed.createComponent(OtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
