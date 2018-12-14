import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

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
      text-align: left;
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
        description: '',
        content: '班级描述'
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
      text-align: left;
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


// 发布公告按钮
@Component({
  selector: 'app-admin-announce',
  template: `
    <button nz-button nzType="primary" (click)="showModalMiddle()" style="margin-right: 8px;">
      发布公告
    </button>
    <nz-modal nzWrapClassName="vertical-center-modal"
              [(nzVisible)]="isVisibleMiddle"
              nzTitle="公告内容"
              (nzOnCancel)="handleCancelMiddle()"
              (nzOnOk)="handleOkMiddle()">
      <textarea rows="4" nz-input [(ngModel)]="inputValue"></textarea>
    </nz-modal>
  `,
  styles: [ `
    ::ng-deep .vertical-center-modal {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ::ng-deep .vertical-center-modal .ant-modal {
      top: 0;
    }
  ` ]
})
export class AdminClassAnnounceComponent {
  inputValue: string;
  isVisibleMiddle = false;
  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }
  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }
  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}

// 解散班级按钮
@Component({
  selector: 'app-admin-class-breakup',
  template: `
    <button nz-button nzType="dashed" (click)="showDeleteConfirm()">解散班级</button>
  `,
  styles  : [
    `button {
      margin-right: 8px;
    }`
  ]
})
export class AdminBreakUpClassComponent {
  constructor(private modalService: NzModalService) {
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle     : '你确定要解散班级吗?',
      nzOkText    : 'Yes',
      nzOkType    : 'danger',
      nzOnOk      : () => console.log('确定'),
      nzCancelText: 'No',
      nzOnCancel  : () => console.log('取消')
    });
  }
}
