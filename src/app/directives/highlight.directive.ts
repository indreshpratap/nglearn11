import { Directive, ElementRef, HostListener, Host, Input } from '@angular/core';

@Directive({
    selector: '[highlight]', //attribute selector
})
export class HighlightDirective {

    @Input("highlight") bgColor:string;
    @Input("color") color:string;
    // dependency injection
    constructor(private element: ElementRef) {
        console.log("Highlight directive constructor", element.nativeElement);
    }

    applyBg(bgcolor) {
        this.element.nativeElement.style.backgroundColor = bgcolor;
        if(this.color){
            this.element.nativeElement.style.color = this.color;
        }
    }

    @HostListener('mouseenter')
    onEnter() {
        this.applyBg(this.bgColor||'yellow');
    }

    @HostListener('mouseleave')
    onLeave() {
        this.applyBg('transparent');
    }
}