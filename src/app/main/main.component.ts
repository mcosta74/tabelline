import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div cds-layout="vertical align:stretch" class="main-page">
      <header class="app-header" cds-layout="horizontal p:md align:vertical-center">
        <div>
          Impara le Tabelline
        </div>
      </header>
      <app-calculator></app-calculator>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100vh;
      }
      .app-header {
        background-color: var(--cds-global-color-blue-900);
        color: white;
        font-size: 0.9rem;
        max-height: 60px;
      }
    `
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
