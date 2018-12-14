import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rank-page',
  templateUrl: './rank-page.component.html',
  styleUrls: ['./rank-page.component.css']
})
export class RankPageComponent implements OnInit {

  dataSet = [
    {
      rank: '1',
      name: 'John Brown',
      total: 100,
      solved: 100
    },
    {
      rank: '2',
      name: 'Jim Green',
      total: 99,
      solved: 99
    },
    {
      rank: '3',
      name: 'Joe Black',
      total: 98,
      solved: 98
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
