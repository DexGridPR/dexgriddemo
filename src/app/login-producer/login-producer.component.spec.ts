import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProducerComponent } from './login-producer.component';

describe('LoginProducerComponent', () => {
  let component: LoginProducerComponent;
  let fixture: ComponentFixture<LoginProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
