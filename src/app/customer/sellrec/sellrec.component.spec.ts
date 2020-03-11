import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellrecComponent } from './sellrec.component';

describe('SellrecComponent', () => {
  let component: SellrecComponent;
  let fixture: ComponentFixture<SellrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
