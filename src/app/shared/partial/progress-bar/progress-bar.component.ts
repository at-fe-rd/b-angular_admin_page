import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../core/service/index';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent implements OnInit {

  isEnable: boolean;

  constructor(private ns: NotificationService) {
    this.isEnable = false;
  }

  /**
   * Lifecycle for modal which only fires once the primary view finished init.
   * @method ngOnInit
   */
  ngOnInit() {
    this.ns.progressing().subscribe((yes: any) => {
      this.isEnable = yes;
    });
  }

}
