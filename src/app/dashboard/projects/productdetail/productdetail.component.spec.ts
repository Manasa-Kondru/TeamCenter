import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailComponent } from './productdetail.component';
import { matmodules } from 'src/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgService } from 'src/app/services/svg.service';
 //excluding particular test suite or test case.
describe('ProductdetailComponent', () => {
  let component: ProductdetailComponent;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let authService:AuthService;
  let fixture: ComponentFixture<ProductdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetailComponent],
      imports:[matmodules,HttpClientModule,UbiquitousModule,BrowserAnimationsModule],
      providers:[AuthService,SvgService]
    });
   httpClientSpy=jasmine.createSpyObj('HttpClient',['']);
authService=new AuthService(httpClientSpy);
    fixture = TestBed.createComponent(ProductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
