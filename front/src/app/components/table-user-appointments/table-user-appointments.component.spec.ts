import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserAppointmentsComponent } from './table-user-appointments.component';

describe('TableUserAppointmentsComponent', () => {
  let component: TableUserAppointmentsComponent;
  let fixture: ComponentFixture<TableUserAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUserAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUserAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
