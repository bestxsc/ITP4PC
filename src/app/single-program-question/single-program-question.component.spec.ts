import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProgramQuestionComponent } from './single-program-question.component';

describe('SingleProgramQuestionComponent', () => {
  let component: SingleProgramQuestionComponent;
  let fixture: ComponentFixture<SingleProgramQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProgramQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProgramQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
