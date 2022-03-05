import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlayertransmitComponent } from './flayertransmit.component';

describe('FlayertransmitComponent', () => {
  let component: FlayertransmitComponent;
  let fixture: ComponentFixture<FlayertransmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlayertransmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlayertransmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
