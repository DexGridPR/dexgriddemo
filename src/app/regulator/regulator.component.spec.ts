import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorComponent } from './regulator.component';

describe('RegulatorComponent', () => {
  let component: RegulatorComponent;
  let fixture: ComponentFixture<RegulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
