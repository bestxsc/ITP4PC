import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-problems-page',
  templateUrl: './problems-page.component.html',
  styleUrls: ['./problems-page.component.css']
})

export class ProblemsPageComponent implements OnInit {
  Modules1: Module [];
  Articles01: Article [] = [
    new Article('树形结构模拟卷1',
      '作者：XXX 难度：4',
      'sproblem',
      ghjhgjgjhgkjgkjgkhkjgkjgghjgkjhg
      '100')
  ];
  hgfjghfjhgfhjgfhgjfghfjfh
  Articles02: Article [] = [
    new Article('图形结构模拟卷1',
      '作者：XXX 难度：4',
      'sproblasdfasdfasdfsdfasfem',
      '75'),
  ];
  Articles03: Article [] = [
    new Article('散列表模拟卷1',
      '作者：XXX 难度：4',
      'sproblem',
      '50'),
    new Article('散列表模拟卷2',
      '作者：XXX 难度：4',
      'sproblem',
      '25')
  ];
  Articles04: Article [] = [
    new Article('搜索模拟卷1',
      '作者：XXX 难度：4',
      'sproblem',
      '0'),
    new Article('搜索模拟卷2',
      '作者：XXX 难度：4',
      'sproblem',
      '0')
  ];

  constructor() {
    this.Modules1 = [
      new Module('树形结构', this.Articles01),
      new Module('图形结构', this.Articles02),
      new Module('散列表', this.Articles03),
      new Module('搜索', this.Articles04)
    ];
  }

  ngOnInit() {
  }

}

export class Article {
  public title: string;
  public content: string;
  public href: string;
  public compelete: string;

  constructor(title: string, content: string, href: string, compelete: string) {
    this.title = title;
    this.content = content;
    this.href = href;
    this.compelete = compelete;
  }
}

export class Module {
  public title: string;
  public Articles: Article [];

  constructor(title: string, Articles: Article []) {
    this.title = title;
    this.Articles = Articles;
  }
}
