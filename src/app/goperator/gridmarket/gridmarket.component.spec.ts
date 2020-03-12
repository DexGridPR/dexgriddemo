import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridmarketComponent } from './gridmarket.component';

describe('GridmarketComponent', () => {
  let component: GridmarketComponent;
  let fixture: ComponentFixture<GridmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
