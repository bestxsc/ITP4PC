import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-single-select-question',
  templateUrl: './single-select-question.component.html',
  styleUrls: ['./single-select-question.component.css']
})
export class SingleSelectQuestionComponent implements OnInit {

  // 应用此组建需要题干和答案数组（4个选项）
  @Input() question: string;
  @Input() answers: string[];

  // 识别用户所选择的选项
  radioValue = '';

  constructor() {
  }

  ngOnInit() {
  }

}


