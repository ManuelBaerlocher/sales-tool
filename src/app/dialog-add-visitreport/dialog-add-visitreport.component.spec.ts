import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddVisitreportComponent } from './dialog-add-visitreport.component';

describe('DialogAddVisitreportComponent', () => {
  let component: DialogAddVisitreportComponent;
  let fixture: ComponentFixture<DialogAddVisitreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddVisitreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddVisitreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
