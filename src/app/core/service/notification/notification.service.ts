import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

export interface Msg {
  type?: string;
  msg?: string;
  msgObj?: any;
  sub?: Array<string>;
  link?: any;
  timeout?: number;
}

export interface Dialog {
  type?: string;
  header?: string;
  content?: string;
  contentObj?: any;
  contentType?: string;
  btnAccept?: any;
  btnClose?: any;
  btnReject?: any;
}

@Injectable()
export class NotificationService {

  private dialog$: Subject<any>;
  private dialogCallback$: Subject<any>;
  private error$: Subject<any>;
  private progressBar$: Subject<boolean>;

  constructor() {
    this.dialog$ = <Subject<any>>new Subject();
    this.dialogCallback$ = <Subject<boolean>>new Subject();
    this.error$ = <Subject<any>>new Subject();
    this.progressBar$ = <Subject<boolean>>new Subject();
  }

  /**
   * [progress description]
   * @method progress
   * @param  {boolean = true}        show [description]
   * @return {[type]}       [description]
   */
  progress(show: boolean = true) {
    this.progressBar$.next(show);
    return show;
  }

  progressing(): Observable<boolean> {
    return this.progressBar$.asObservable();
  }

  /**
   * [progress description]
   * @method progress
   * @param  {boolean = true}        show [description]
   * @return {[type]}       [description]
   */
  dialog(dialog: Dialog = null) {
    this.dialog$.next(dialog);
    return this.dialogCallback$.asObservable().first();
  }

  dialogCallback(confirm: boolean = false) {
    this.dialogCallback$.next(confirm);
  }

  dialogObserver(): Observable<boolean> {
    return this.dialog$.asObservable();
  }

  /**
   * [progress description]
   * @method progress
   * @param  {boolean = true}        show [description]
   * @return {[type]}       [description]
   */
  message(msg: Msg = null) {
    this.error$.next(msg);
  }

  errorHandling(): Observable<boolean> {
    return this.error$.asObservable();
  }

}

export const NOTIFICATION_PROVIDERS: any[] = [
  NotificationService
];
