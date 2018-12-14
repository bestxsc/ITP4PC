import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJudgeQuestionComponent } from './single-judge-question.component';

describe('SingleJudgeQuestionComponent', () => {
  let component: SingleJudgeQuestionComponent;
  let fixture: ComponentFixture<SingleJudgeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJudgeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJudgeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
