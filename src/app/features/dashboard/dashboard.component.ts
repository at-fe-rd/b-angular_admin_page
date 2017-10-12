import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  isInit: boolean;

  constructor() {
    this.isInit = true;
  }

  ngOnInit() {
    this.isInit = false;
  }

}
