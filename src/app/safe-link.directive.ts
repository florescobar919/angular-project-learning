import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'oncConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  constructor() { 
    console.log('SafeLinkDirective is active');
    
  }

  oncConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app ?');
    if(wantsToLeave) {
      return;
    }
    event?.preventDefault();

  }

}
