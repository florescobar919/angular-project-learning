import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'oncConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  queryParam = input('myapp', {alias: 'appSafeLink'});

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() { 
    console.log('SafeLinkDirective is active');
    
  }

  oncConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app ?');
    if(wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      (event.target as HTMLAnchorElement).href = address + '?from='+ this.queryParam();
      return;
    }
    event?.preventDefault();

  }

}
