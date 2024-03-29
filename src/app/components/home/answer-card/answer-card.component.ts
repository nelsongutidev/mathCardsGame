import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-answer-card',
    templateUrl: './answer-card.component.html',
    styleUrls: ['./answer-card.component.scss'],
    standalone: true
})
export class AnswerCardComponent implements OnChanges {
  @Input() answer: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.answer = changes.answer.currentValue;
    }, 700);
    this.answer = null;
  }
}
