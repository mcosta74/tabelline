import { Component, OnInit } from '@angular/core';

import "@cds/core/button/register.js";

@Component({
  selector: "app-calculator",
  template: `
    <div cds-layout="vertical gap:lg">
      <h3 cds-text="title">Esercitati con le tabelline</h3>

      <p cds-text="message">
        Trova il risultato dell'operazione seguente.<br />
        Quando sei sicuro, clicca sul pulsante "Prova" e scopri se la tua
        risposta è esatta
      </p>

      <p cds-text="heading center" class="operation">{{ a }} x {{ b }} = ?</p>

      <div cds-layout="horizontal gap:lg align:vertical-center">
        <label>Risposta:</label>
        <input
          type="number"
          placeholder="Scrivi qui la tua risposta"
          class="my-input"
          [(ngModel)]="answer"
        />
        <cds-button (click)="checkAnswer()">Prova</cds-button>
      </div>
      <cds-button (click)="generate()">Nuova Operazione</cds-button>
      <p *ngIf="correctAnswer !== null" cds-text="title"[ngClass]="messageClass()">{{ messageText() }}</p>
      <div></div>
    </div>
  `,
  styles: [
    `
      :host {
        padding: 10px;
        width: 100%;
      }
      .my-input {
        padding: 10px;
        min-width: 300px;
      }
      .operation {
        width: 500px;
        color: var(--cds-global-color-red-800);
      }
      .success {
        color: var(--cds-alias-status-success);
      }
      .error {
        color: var(--cds-alias-status-danger);
      }
    `,
  ],
})
export class CalculatorComponent implements OnInit {
  a: number = 0;
  b: number = 0;
  answer: number | null = null;
  correctAnswer: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    this.generate();
  }

  generate() {
    this.a = this.randomInt(10);
    this.b = this.randomInt(10);
    this.answer = null;
    this.correctAnswer = null;
  }

  private randomInt(max: number) {
    return Math.round(Math.random() * max);
  }

  get buttonDisabled(): boolean {
    const a = this.answer === null;
    console.log('A:', a);
    return a;
  }

  checkAnswer() {
    this.correctAnswer = this.a * this.b === this.answer;
  }

  messageText(): string {
    if (this.correctAnswer === null) {
      return "";
    }
    return this.correctAnswer
      ? "Risposta Esatta. Ottimo Lavoro!"
      : "Risposta Sbagliata. Riprova!";
  }

  messageClass(): string {
    if (this.correctAnswer === null) {
      return "";
    }
    return this.correctAnswer ? "success" : "error";
  }
}
