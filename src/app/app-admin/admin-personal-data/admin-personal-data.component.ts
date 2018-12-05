import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-personal-data',
  templateUrl: './admin-personal-data.component.html',
  styleUrls: ['./admin-personal-data.component.css']
})
export class AdminPersonalDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



@Component({
  selector: 'app-admin-personal-data-1',
  template: `
    <nz-card nzType="inner" nzTitle="基本信息" [nzExtra]="extraTemplate">
    </nz-card>
   `

})
export class AdminPersonalComponent {

}

@Component({
  selector: 'app-admin-personal-data-2',
  template: `
    <nz-card nzType="inner" nzTitle="修改密码" [nzExtra]="extraTemplate">
      <textarea nz-input placeholder="Autosize height based on content lines" nzAutosize>
      </textarea>
    </nz-card>
  `,

})
export class AdminPersonalSafeComponent {
}
