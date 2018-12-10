import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-class-management',
  templateUrl: './admin-class-management.component.html',
  styleUrls: ['./admin-class-management.component.css']
})
export class AdminClassManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// 创建班级组件
@Component({
  selector: 'app-admin-create-class',
  templateUrl: './create-class.html',
  styles: [`
    .footer {
      position: absolute;
      bottom: 0px;
      width: 100%;
      border-top: 1px solid rgb(232, 232, 232);
      padding: 10px 16px;
      text-align: right;
      left: 0px;
      background: #fff;
    }
  `]
})
export class AdminCreateClassComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}


// 陈列所管理班级组件
@Component({
  selector: 'app-admin-display-class',
  templateUrl: './display-class.html',

})
export class AdminDisplayClassComponent implements OnInit {
  // tslint:disable-next-line:no-any
  data: any[] = [];

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((i, index) => {
      return {
        href: '#',
        title: `班级 ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high ' +
          'quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }
}


// 班级详细信息
@Component({
  selector: 'app-admin-class-info',
  templateUrl : './class-info.html',
  styles: [`
    .footer {
      position: absolute;
      bottom: 0px;
      width: 100%;
      border-top: 1px solid rgb(232, 232, 232);
      padding: 10px 16px;
      text-align: right;
      left: 0px;
      background: #fff;
    }
  `]
})
export class AdminClassInfoComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
