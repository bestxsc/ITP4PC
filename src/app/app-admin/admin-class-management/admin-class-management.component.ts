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
