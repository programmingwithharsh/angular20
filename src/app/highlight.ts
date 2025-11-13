import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight implements OnInit, OnChanges {
  @Input() appHighlightBc: string | undefined; // background color
  @Input() highlightTextColor: string | undefined; // text color
  @Input() hightlightBorder: string | undefined; // border style

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (!this.appHighlightBc) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appHighlightBc) {
      this.el.nativeElement.style.backgroundColor = this.appHighlightBc;
    }
    if (this.highlightTextColor) {
      this.el.nativeElement.style.color = this.highlightTextColor;
    }
    if (this.hightlightBorder) {
      this.el.nativeElement.style.border = this.hightlightBorder;
    }
  }
}
