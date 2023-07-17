import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsgraphComponent } from './productsgraph.component';

describe('ProductsgraphComponent', () => {
  let component: ProductsgraphComponent;
  let fixture: ComponentFixture<ProductsgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsgraphComponent ]
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
