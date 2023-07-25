import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsComponent } from './congrats.component';
import { matmodules } from 'src/material/material.module';
import { SvgService } from 'src/app/services/svg.service';

describe('CongratsComponent', () => {
  let component: CongratsComponent;
  let fixture: ComponentFixture<CongratsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongratsComponent],
      imports: [matmodules],
      providers:[SvgService]
    });
    fixture = TestBed.createComponent(CongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
