import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { matmodules } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { SvgService } from 'src/app/services/svg.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let activatedRouteMock: Partial<ActivatedRoute>;

  beforeEach(() => {
    activatedRouteMock = {
        // Add the properties used in your component here
        // snapshot: {
        //   paramMap: new Map<string, string>().set('paramKey', 'paramValue'),
        // },
      };

    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers:[AuthService,
        { provide: ActivatedRoute, useValue: activatedRouteMock },SvgService],
      imports:[HttpClientModule,matmodules,BrowserAnimationsModule,RouterModule]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
