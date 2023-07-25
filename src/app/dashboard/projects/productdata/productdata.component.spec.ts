import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdataComponent } from './productdata.component';
import { matmodules } from 'src/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';
import { SvgService } from 'src/app/services/svg.service';

describe('ProductdataComponent', () => {
  let component: ProductdataComponent;
  let fixture: ComponentFixture<ProductdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdataComponent],
      imports:[matmodules,HttpClientModule,UbiquitousModule],
      providers:[AuthService,SvgService]
    });
    fixture = TestBed.createComponent(ProductdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
