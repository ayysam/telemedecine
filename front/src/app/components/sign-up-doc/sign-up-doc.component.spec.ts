import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDocComponent } from './sign-up-doc.component';

describe('SignUpDocComponent', () => {
  let component: SignUpDocComponent;
  let fixture: ComponentFixture<SignUpDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
