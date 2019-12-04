import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcontrolComponent } from './regcontrol.component';

describe('RegcontrolComponent', () => {
  let component: RegcontrolComponent;
  let fixture: ComponentFixture<RegcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
