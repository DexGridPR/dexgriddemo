import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaccComponent } from './regacc.component';

describe('RegaccComponent', () => {
  let component: RegaccComponent;
  let fixture: ComponentFixture<RegaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
