import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotbarComponent } from './demotbar.component';

describe('DemotbarComponent', () => {
  let component: DemotbarComponent;
  let fixture: ComponentFixture<DemotbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
