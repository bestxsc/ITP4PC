import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.css']
})
export class TextPageComponent implements OnInit {

  index = 0;
  TArticle:Article[];

  answer1=["1+1=?",["1","2","3","4"]];
  constructor() {

    this.TArticle=[
      new Article("天梯赛月赛",0,"sproblem","2018-12-01 10:00:00——2018-12-01 12:00:00   创办者:小明"),
      new Article("网络安全竞赛",1,"sproblem","2018-12-30 15:00:00——2018-12-30 17:00:00   创办者:李华"),
      new Article("划水赛",2,"sproblem","2018-11-01 17:00:00——2018-11-10 21:00:00   创办者:明华"),
      new Article("网络安全竞赛1",1,"sproblem","2018-12-30 15:00:00——2018-12-30 17:00:00   创办者:李华"),
      new Article("网络安全竞赛2",1,"sproblem","2018-12-30 15:00:00——2018-12-30 17:00:00   创办者:李华"),
    ]
   }

  ngOnInit() {
  }


  // result(b:string){
  //   console.log('eeeee:${b}')
  // }
}


export class Article {
    
  title:string;
  state:number;//0表示进行中；1表示未进行；2表示已进行；
  href:string;
  content:string;//包括起止时间，持续时间，创办者

  constructor(title:string,state:number,href:string,content:string) {
    this.title=title;
    this.state=state;
    this.href=href;
    this.content=content; 
  }
}
