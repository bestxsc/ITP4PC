import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-problem-page',
  templateUrl: './single-problem-page.component.html',
  styleUrls: ['./single-problem-page.component.css']
})
export class SingleProblemPageComponent implements OnInit {

  index=0;
  selectProblems:SelectProblem[];
  judgeProblems:JudgeProblem[];
  programProblems:ProgramProblem[];

  constructor() { 
    this.selectProblems=[new SelectProblem("1.1+1=?",["1","2","3","4"]),
                        new SelectProblem("2.hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",["h","hh","hhh","hhhh"]),
                        new SelectProblem("3.谁是最帅的？",["单北光","尼克学长","sheeran","以上全是"])];
    this.judgeProblems=[new JudgeProblem("1.二叉树是是树"),
                        new JudgeProblem("2.1+1=3"),
                        new JudgeProblem("3.gcw油腻中年"),
                        new JudgeProblem("4.xsc小鲜肉"),
                        new JudgeProblem("5.lmx是大佬"),];
    this.programProblems=[new ProgramProblem("1.英寸与厘米的交互","作者：xsc 难度：1",10,"#"),
                          new ProgramProblem("2.郭晨伟放肆的大学生活","作者：gcw 难度：2",15,"#"),
                          new ProgramProblem("3.头皮越来越冷的问题剖析","作者：佚名 难度：5",30,"#"),
                          new ProgramProblem("4.程序员的自我救赎","作者：小华 难度：4",25,"#")];
  }

  ngOnInit() {
  }

}

//选择题类
export class SelectProblem{

  question:string;
  answers:string[];

  constructor(question:string,answers:string[]){
    this.question=question;
    this.answers=answers;
  }
}

//判断题类
export class JudgeProblem{

  question:string;

  constructor(question:string){
    this.question=question;
  }
}

//编程题(预览卡片)类
export class ProgramProblem{

  title:string;
  content:string;
  score:number;
  href:string;

  constructor(title:string,content:string,score:number,href:string){
    this.title=title;
    this.content=content;
    this.score=score;
    this.href=href;
  }

}