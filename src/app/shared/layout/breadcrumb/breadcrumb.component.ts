import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import "rxjs/add/operator/filter";

interface IBreadcrumb {
  label: string;
  url: string;
  needUpdate?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})

export class BreadcrumbComponent implements OnInit {

  @Input() itemName: any;

  breadcrumbs: IBreadcrumb[];
  pageTitle: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.getBreadcrumbs(this.activatedRoute.root.children);
    //this.breadcrumbs = _.uniqBy(this.breadcrumbs, 'label');
    this.router.events.subscribe((val: any) => {
      this.getBreadcrumbs(this.activatedRoute.root.children);
      //this.breadcrumbs = _.uniqBy(this.breadcrumbs, 'label');
    });
  }

  private getBreadcrumbs(routes: any, isRefresh: boolean = true) {
    if (isRefresh) {
      //reset breadcrumb if params is root router
      this.breadcrumbs = [];
      this.pageTitle = 'home';
    }
    let paths: Array<any> = [];
    for (let obj of routes) {
      if (obj.snapshot && obj.routeConfig) {
        let ind = obj.snapshot['_lastPathIndex'];
        if (ind !== -1 && obj.routeConfig.path) {
          //if router has a component
          // if (!(obj.routeConfig.data && obj.routeConfig.data['withoutComp'] === true)) {
          //
          // }
          let breadcrumb: any = {};
          //get paths of router by segments
          paths = obj.snapshot['_urlSegment']['segments'];
          let end = ind + 1;
          paths = paths.slice(0, end);
          //set flag to need update data for label of link to detail
          if (this.checkLinkDetail(obj.snapshot.parent)) {
            //breadcrumb.needUpdate = true;
            paths.splice(ind -1, 1);
          }
          let label = paths.join('.').replace(/-/g, '_');
          //root for each component is action view list (management)
          if (this.checkRootComp(obj)) {
            label = `${label}.management`;
          }
          //set flag to need update data for label of link to detail
          if (this.checkLinkDetail(obj)) {
            breadcrumb.isDetail = true;
            label = label.replace(paths[ind], 'detail');
          }
          //set flag to module
          if (this.checkLinkWithoutComp(obj)) {
            breadcrumb.isMod = true;
            label = `${label}.module`;
          }
          breadcrumb.label = label;
          breadcrumb.url = `/${paths.join('/')}`;
          //set title for page
          this.pageTitle = label;
          //push new item for breadcrumb
          if (!(this.checkRootComp(obj) && label === 'users.management')) {
            this.breadcrumbs.push(breadcrumb);
          }
        }
      }
      if (obj.children.length) {
        //recursive to get get breadcrumb for router children
        this.getBreadcrumbs(obj.children, false);
      }
    }
  }

  checkRootComp(obj: any) {
    let isRoot: boolean = false;
    if (obj.routeConfig) {
      if (obj.routeConfig.pathMatch === 'full' || (obj.routeConfig.data && obj.routeConfig.data.isRoot)) {
        isRoot = true;
      }
    }
    return isRoot;
  }

  checkLinkWithoutComp(obj: any) {
    let isMod: boolean = false;
    if (obj.routeConfig) {
      if (obj.routeConfig.data && obj.routeConfig.data.withoutComp) {
        isMod = true;
      }
    }
    return isMod;
  }

  checkLinkDetail(obj: any) {
    let isDetail: boolean = false;
    if (obj.routeConfig) {
      if (obj.routeConfig.path === ':id' || (obj.routeConfig.data && obj.routeConfig.data.isDetail)) {
        //breadcrumb.needUpdate = true;
        isDetail = true
      }
    }
    return isDetail;
  }

}
