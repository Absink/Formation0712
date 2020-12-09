import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorDay]'
})
export class ColorDayDirective implements OnChanges {

  @Input() appColorDay: number;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges(): void {
    this.className = this.formatClass(this.appColorDay);
  }

  private formatClass(day: number): string {
    if (day === 1) {
      return `day`;
    }
    return `days`;
  }

}
