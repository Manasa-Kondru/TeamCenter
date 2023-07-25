import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsgraphComponent } from './productsgraph.component';
import { MatDialogRef } from '@angular/material/dialog';
import { SvgService } from 'src/app/services/svg.service';

describe('ProductsgraphComponent', () => {
  let component: ProductsgraphComponent;
  let fixture: ComponentFixture<ProductsgraphComponent>;
  const matDialogRefMock = {
    // Add any properties or methods used in the component
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsgraphComponent ],
      providers:[ { provide: MatDialogRef, useValue: matDialogRefMock },SvgService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
