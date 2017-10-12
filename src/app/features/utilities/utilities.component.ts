import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../core/service/index';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html'
})
export class UtilitiesComponent implements OnInit {

  isInit: boolean;
  progressBarVisible: boolean;
  isInlineLoading: boolean;

  constructor(private ns: NotificationService) {
    this.isInit = true;
    this.isInlineLoading = false;
  }

  ngOnInit() {
    this.isInit = false;
  }

  alertDialog() {
    this.ns.dialog({
      content: 'My name is Alert'
    });
  }

  confirmDialog() {
    this.ns.dialog({
      type: 'confirm',
      btnAccept: {
        txt: 'action.accept',
        cls: 'btn-outline-success'
      },
      btnReject: {
        txt: 'action.reject',
        cls: 'btn-outline-danger'
      }
    }).subscribe((accept: boolean) => {
      if (accept) {
        this.showMsg('success');
      } else {
        this.showMsg('danger');
      }
    });
  }

  toggleBar(val: boolean) {
    this.progressBarVisible = this.ns.progress(val);
  }

  showMsg(type: string, options: boolean = false) {
    let config: any = {
      type: type,
      msg: `alert.${type}`
    };
    if (type === 'danger' && options) {
      config.sub = [
        'form.required',
        'form.link'
      ];
    } else if (type === 'warning' && options) {
      config.link = {
        txt: 'action.retry',
        href: '/'
      };
    }
    this.ns.message(config);
  }

  pageLoading() {
    this.isInit = true;
    setTimeout(() => {
      this.isInit = false;
    }, 1000);
  }

  inlineLoading() {
    this.isInlineLoading = true;
    setTimeout(() => {
      this.isInlineLoading = false;
    }, 1000);
  }

}
