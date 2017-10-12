import { Component, OnInit } from '@angular/core';
import { NotificationService, Msg } from '../../../core/service/index';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  isEnable: boolean;
  config: any;
  timeout: any;

  constructor(private ns: NotificationService) {
    this.isEnable = false;
    this.config = {};
  }

  ngOnInit() {
    this.ns.errorHandling().subscribe((config: any = null) => {
      if (config) {
        this.showMsg(config);
      } else {
        this.hideMsg();
      }
    });
  }

  showMsg(config: any) {
    clearTimeout(this.timeout);
    this.config = config;
    this.isEnable = true;
    let timeout = this.config.timeout || 3000;
    this.timeout = setTimeout(() => {
      this.isEnable = false;
      clearTimeout(this.timeout);
    }, 3000);
  }

  hideMsg() {
    this.isEnable = false;
  }

}
