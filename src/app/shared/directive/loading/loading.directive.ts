import { Directive, Input, OnInit, ElementRef, Renderer, OnChanges } from '@angular/core';

export interface Options {
  isInline: boolean;
  isLoading: boolean;
  hasError: boolean;
}

@Directive({
  selector: '[loading]'
})


export class LoadingDirective implements OnInit, OnChanges {

  @Input() loading: boolean;
  @Input() inlineOptions: Options;
  loadingContent: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
  }

  ngOnInit() {
    //
  }

  reRenderer() {
    if (this.loading) {
      if (this.inlineOptions) {
        this.removeLoadingContent();
        if (this.inlineOptions.hasError) {
          this.renderErrorElm();
        } else {
          this.renderLoadingIcon(false);
        }
      } else {
        this.renderLoadingIcon();
      }
      //append new above current element
      this.el.nativeElement.appendChild(this.loadingContent, this.el.nativeElement);
    } else {
      this.removeLoadingContent();
    }
  }

  removeLoadingContent() {
    if (this.loadingContent) {
      this.el.nativeElement.removeChild(this.loadingContent);
      this.loadingContent = null;
    }
  }

  renderErrorElm() {
    this.loadingContent = this.renderer.createElement(this.el.nativeElement.parentNode, 'div');
    //setting class name is text-na
    this.loadingContent.setAttribute('class', 'text-danger');
    this.loadingContent.innerHTML = 'API server not response.';
  }

  renderLoadingIcon(isLarge: boolean = true) {
    let cls: string = 'loading-icon';
    if (isLarge) {
      cls = `${cls} icon-large`;
    } else {
      cls = `${cls} icon-inline`;
    }
    this.loadingContent = this.renderer.createElement(this.el.nativeElement.parentNode, 'img');
    //setting class name is text-na
    this.loadingContent.setAttribute('src', '/assets/img/loading.svg');
    this.loadingContent.setAttribute('class', cls);
    this.loadingContent.setAttribute('alt', 'Loading...');
  }

  ngOnChanges() {
    this.reRenderer();
  }

}
