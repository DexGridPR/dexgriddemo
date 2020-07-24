import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationmixComponent } from './generationmix.component';

describe('GenerationmixComponent', () => {
  let component: GenerationmixComponent;
  let fixture: ComponentFixture<GenerationmixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationmixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
