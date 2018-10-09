import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Directive({selector: '[appSortByColumn]'})

export class SortDirective implements OnInit {
  @Input() data: any[];
  // tslint:disable-next-line:no-input-rename
  @Input('sortKey') key: any;
  private toggleSort = false;

  constructor (private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit () {
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      const parentNode = this.el.nativeElement.parentNode;
      const children   = parentNode.children;
      if (this.data && this.key) {
        const sortedData: any = this.sortArray();
      }
      this.toggleSort = !this.toggleSort;
    });
  }

  sortArray (): Array<any> {
    const tempArray: Array<any> = this.data;
    tempArray.sort((a, b) => {
      const aKey = a[this.key];
      // console.log(aKey);
        let str1: any = a[this.key];
        let str2: any = b[this.key];
        if (typeof(aKey) === 'string') {
          str1 = str1.toLowerCase();
          str2 = str2.toLowerCase();
        }
        if (this.toggleSort) {
          if (str1 < str2) {
            return -1;
          }
          if (str1 > str2) {
            return 1;
          }
        } else {
          if (str1 > str2) {
            return -1;
          }
          if (str1 < str2) {
            return 1;
          }
        }
      return 0;
    });
    return tempArray;
  }
}
