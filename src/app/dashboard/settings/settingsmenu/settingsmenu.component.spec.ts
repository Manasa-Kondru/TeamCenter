import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmenuComponent } from './settingsmenu.component';

describe('SettingsmenuComponent', () => {
  let component: SettingsmenuComponent;
  let fixture: ComponentFixture<SettingsmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsmenuComponent]
    });
    fixture = TestBed.createComponent(SettingsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
