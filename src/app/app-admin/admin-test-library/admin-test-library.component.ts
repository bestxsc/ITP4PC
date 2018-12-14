import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-test-library',
  templateUrl: './admin-test-library.component.html',
  styleUrls: ['./admin-test-library.component.css']
})
export class AdminTestLibraryComponent implements OnInit {

  size = 'large';
  /*删除对话框属性*/
  delVisible = false;
  delOkLoading = false;
  /*添加对话框属性*/
  addVisible = false;
  addOkLoading = false;
  title: string;
  selectedValue = '选择题';
  content = '选择题';

  issueSet = [
    {
      id: 1,
      title   :  '第一道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type :  '选择题',
      time    :  '2018年12月5日19点01分'
    },
    {
      id: 2,
      title   :  '第二道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type :  '判断题',
      time    :  '2018年12月5日19点02分'
    },
    {
      id: 3,
      title   :  '第三道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type :  '选择题',
      time    :  '2018年12月5日19点03分'
    },
    {
      id: 4,
      title   :  '第四道题',
      content :  '小明和小红不啦不啦不啦不啦的反正就是不啦不啦不啦的',
      type :  '编程题',
      time    :  '2018年12月5日19点04分'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

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
