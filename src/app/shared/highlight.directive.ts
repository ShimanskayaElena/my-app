import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]'})

export class HighlightDirective {

    @Input('myHighlight') highlightColor: string;

    constructor (private el: ElementRef) {
        // console.log(`* highlight called for ${el.nativeElement.tagName}`);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
