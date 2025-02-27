import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumebodyComponent } from './resumebody.component';

describe('ResumebodyComponent', () => {
  let component: ResumebodyComponent;
  let fixture: ComponentFixture<ResumebodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumebodyComponent]
    });
    fixture = TestBed.createComponent(ResumebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
