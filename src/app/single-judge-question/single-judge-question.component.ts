import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-single-judge-question',
  templateUrl: './single-judge-question.component.html',
  styleUrls: ['./single-judge-question.component.css']
})
export class SingleJudgeQuestionComponent implements OnInit {

  //应用此组建需要题干字符串
  @Input() question:string;

  //识别用户所选择的选项
  radioValue = "";

  constructor() { }

  ngOnInit() {
  }

}
