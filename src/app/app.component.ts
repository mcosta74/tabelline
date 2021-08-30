import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: ` <app-main></app-main> `,
  styles: [
    `
      :host {
        background-color: var(--cds-alias-object-app-background);
      }
    `,
  ],
})
export class AppComponent {
  title = "tabelline";
}
