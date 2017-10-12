import { Component, OnInit } from '@angular/core';
import { NotificationService, Dialog } from '../../../core/service/index';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

  isVisible: boolean;
  dialog: any;
  default: any;

  constructor(private ns: NotificationService) {
    this.isVisible = false;
    this.dialog = {};
    this.default = {
      alert: {
        type: 'alert',
        header: 'dialog.alert.header',
        btnClose: {
          txt: 'action.close',
          cls: 'btn-outline-info'
        }
      },
      confirm: {
        type: 'confirm',
        header: 'dialog.confirm.header',
        content: 'dialog.confirm.content',
        contentObj: null,
        btnAccept: {
          txt: 'action.yes',
          cls: 'btn-outline-warning'
        },
        btnReject: {
          txt: 'action.cancel',
          cls: 'btn-outline-secondary'
        }
      }
    }
  }

  ngOnInit() {
    this.ns.dialogObserver().subscribe((config: any = null) => {
      if (config) {
        this.show(config);
      } else {
        //
      }
    });
  }

  show(config: any) {
    let type = config.type === 'confirm' ? 'confirm' : 'alert';
    this.dialog = Object.assign(this.default[type], config);
    this.isVisible = true;
  }

  close() {
    this.dialog = {};
    this.isVisible = false;
  }

  reject() {
    this.ns.dialogCallback(false);
    this.close();
  }

  accept() {
    this.ns.dialogCallback(true);
    this.close();
  }
}
