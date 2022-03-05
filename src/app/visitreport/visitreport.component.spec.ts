import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitreportComponent } from './visitreport.component';

describe('VisitreportComponent', () => {
  let component: VisitreportComponent;
  let fixture: ComponentFixture<VisitreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
