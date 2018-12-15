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

  issueSet = [
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

  edit(): void {
    window.location.assign("[\'admin-test-library\']");
  }

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
