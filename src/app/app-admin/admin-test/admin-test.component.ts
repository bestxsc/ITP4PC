import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-test',
  templateUrl: './admin-test.component.html',
  styleUrls: ['./admin-test.component.css']
})
export class AdminTestComponent implements OnInit {
  /*添加对话框属性*/
  addVisible = false;
  addOkLoading = false;
  title: string;
  selectedValue = '选择题';
  content = '选择题';

  constructor() { }

  ngOnInit() {
  }

  /*
  打开添加对话框
  */
  addSure(): void {
    this.addVisible = true;
  }

  /*
  添加提交
  */
  addHandle(): void {
    this.addOkLoading = true;
    window.setTimeout(() => {
      this.addVisible = false;
      this.addOkLoading = false;
    }, 3000);
  }

  /*
  关闭删除确定对话框
  */
  addCancel(): void {
    this.addVisible = false;
  }

}

/*
测试列表界面
*/
@Component({
  selector: 'app-admin-test-list',
  templateUrl: './admin-test-list.html',
  styleUrls: ['./admin-test.component.css']
})
export class AdminTestListComponent implements OnInit {

  testSet = [
    {
      id: 1,
      title   :  'PAT乙级',
      content :  'PAT乙级测试题',
      diff :  '简单',
      person :  '老李',
      time    :  '2018年12月5日19点01分'
    },
    {
      id: 2,
      title   :  'PAT甲级',
      content :  'PAT甲级测试题',
      diff :  '中等',
      person :  '老张',
      time    :  '2018年12月5日19点02分'
    },
    {
      id: 3,
      title   :  'PAT顶级',
      content :  'PAT顶级测试题',
      diff :  '困难',
      person :  '老王',
      time    :  '2018年12月5日19点03分'
    }
  ];

  size = 'large';
  /*删除对话框属性*/
  delVisible = false;
  delOkLoading = false;
  /*编辑题目对话框属性*/
  editVisible = false;

  /*
  打开删除确定对话框
  */
  deleteSure(): void {
    this.delVisible = true;
  }

  /*
  删除提交
  */
  handleOk(): void {
    this.delOkLoading = true;
    window.setTimeout(() => {
      this.delVisible = false;
      this.delOkLoading = false;
    }, 3000);
  }

  /*
  关闭删除确定对话框
  */
  deleteCancel(): void {
    this.delVisible = false;
  }

  /*
  打开编辑确定对话框
  */
  editSure(): void {
    this.editVisible = true;
  }

  /*
  关闭编辑确定对话框
  */
  editCancel(): void {
    this.editVisible = false;
  }

  issueSet = [
    {
      id: 1,
      title   :  '第一道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type    :  '选择题',
      time    :  '2018年12月5日19点01分'
    },
    {
      id: 2,
      title   :  '第二道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type    :  '判断题',
      time    :  '2018年12月5日19点02分'
    },
    {
      id: 3,
      title   :  '第三道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type    :  '选择题',
      time    :  '2018年12月5日19点03分'
    },
    {
      id: 4,
      title   :  '第四道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type    :  '编程题',
      time    :  '2018年12月5日19点04分'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

/*
测试详情界面
*/
@Component({
  selector: 'app-admin-test-detail',
  templateUrl: './admin-test-detail.html',
  styleUrls: ['./admin-test.component.css']
})
export class AdminTestDetailComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
