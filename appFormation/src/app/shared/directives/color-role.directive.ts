import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoleUser } from '../enums/role-user.enum';

@Directive({
  selector: '[appColorRole]'
})
export class ColorRoleDirective implements OnChanges {

  @Input() appColorRole: string;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges(): void {
    this.className = this.formatClass(this.appColorRole);
  }

  private formatClass(role: string): string {
    if(role === RoleUser.ADMIN) {
      return `displayAdmin`;
    }
    return `displayUser`;
  }

}
