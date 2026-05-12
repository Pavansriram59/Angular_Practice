import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appCustom]',
})
export class Custom {
  constructor() {
    console.log('Custom directive initialized');
  }
}
