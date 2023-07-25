import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentComponent } from './document.component';
import { AuthService } from 'src/app/services/auth.service';
import { UbiquitousModule } from 'src/app/ubiquitous/ubiquitous.module';
import { matmodules } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgService } from 'src/app/services/svg.service';

describe('DocumentComponent', () => {
  let component: DocumentComponent;
  let fixture: ComponentFixture<DocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentComponent],
      imports:[UbiquitousModule,matmodules,BrowserAnimationsModule],
      providers:[SvgService]
    });
    fixture = TestBed.createComponent(DocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
