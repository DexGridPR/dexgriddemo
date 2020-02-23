import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemarketComponent } from './themarket.component';

describe('ThemarketComponent', () => {
  let component: ThemarketComponent;
  let fixture: ComponentFixture<ThemarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
