import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProducerComponent } from './demo-producer.component';

describe('DemoProducerComponent', () => {
  let component: DemoProducerComponent;
  let fixture: ComponentFixture<DemoProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
