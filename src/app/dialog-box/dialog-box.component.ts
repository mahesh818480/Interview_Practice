import { Component, Input, SimpleChange } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ANGULARQUIZ, QUIZQUESTIONS } from '../data/angular-quiz';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {
  constructor(public activeModal: NgbActiveModal) { }
  @Input() question: any;
  @Input() correctAnswers: any;
  @Input() missingQuestion: any;
  @Input() angularQuizQns!: ANGULARQUIZ[];
  ngOnInit() {
  }
  onContinue() {
    this.activeModal.close('continue')
  }
}
