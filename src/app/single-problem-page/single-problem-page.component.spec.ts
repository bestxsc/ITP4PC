import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProblemPageComponent } from './single-problem-page.component';

describe('SingleProblemPageComponent', () => {
  let component: SingleProblemPageComponent;
  let fixture: ComponentFixture<SingleProblemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProblemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
