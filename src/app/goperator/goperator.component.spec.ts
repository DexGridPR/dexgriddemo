import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoperatorComponent } from './goperator.component';

describe('GoperatorComponent', () => {
  let component: GoperatorComponent;
  let fixture: ComponentFixture<GoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
