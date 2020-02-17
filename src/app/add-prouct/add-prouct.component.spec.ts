import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProuctComponent } from './add-prouct.component';

describe('AddProuctComponent', () => {
  let component: AddProuctComponent;
  let fixture: ComponentFixture<AddProuctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProuctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
