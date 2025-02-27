import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintedExperienceComponent } from './printed-experience.component';

describe('PrintedExperienceComponent', () => {
  let component: PrintedExperienceComponent;
  let fixture: ComponentFixture<PrintedExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintedExperienceComponent]
    });
    fixture = TestBed.createComponent(PrintedExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
