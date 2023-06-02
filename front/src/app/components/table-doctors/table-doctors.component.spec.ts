import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDoctorsComponent } from './table-doctors.component';

describe('TableDoctorsComponent', () => {
  let component: TableDoctorsComponent;
  let fixture: ComponentFixture<TableDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
