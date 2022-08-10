import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit.component';

describe('DemoFormWithValidationsExplicitComponent', () => {
  let component: DemoFormWithValidationsExplicitComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsExplicitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsExplicitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormWithValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
