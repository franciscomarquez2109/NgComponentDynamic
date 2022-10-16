import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCompDynamic]'
})
export class CompDynamicDirective {

  constructor(
    public viewContainerRef : ViewContainerRef
  ) { }

}
