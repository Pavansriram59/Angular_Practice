import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Custom } from './custom';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Custom],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host:{
    '(click)':'onConfirmLeavePage($event)'
  }
})
export class App {
  protected readonly title = signal('myapp');
  queryParam = 'myapp-docs-link';

  onConfirmLeavePage(event: MouseEvent) {
    const confirmation = confirm('Are you sure you want to leave this page?');
    if (confirmation) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam;
      return;
    }
    
    event.preventDefault();
  }
}
