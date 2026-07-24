import { Component, Input } from '@angular/core';
import { ANGULARQUIZ, QUIZQUESTIONS } from '../data/angular-quiz';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { mediumQuestionsPart1 } from '../data/angular_medium';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  @Input() 'isValue': Boolean;
  'angularQuizQns': ANGULARQUIZ[];
  selectedValue: any;
  selectedAnswers: { [key: number]: string } = {};
  correctAnswers: any = [];
  isSubmited = false;
  missingQuestion: any = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.angularQuizQns = [...QUIZQUESTIONS.slice(0, 25)];
  }
  onChange(event: any) {
    this.selectedValue = event;
  }
  onSubmit() {
    this.correctAnswers = [];
    this.missingQuestion = [];
    this.angularQuizQns.filter((val) => {
      if (this.selectedAnswers[val.id] == val.answer) {
        this.correctAnswers.push(val);
      }
      if (!this.selectedAnswers[val.id]) {
        this.missingQuestion.push(val)
      }
    });
    if (this.correctAnswers.length > 0) {
      this.isSubmited = true;
      const modalRef: any = this.modalService.open(DialogBoxComponent);
      modalRef.result.then((result: any) => {
        if (result === 'continue') {
          this.angularQuizQns = QUIZQUESTIONS.sort(() => Math.random() - 5).slice(0, 25);
          this.selectedAnswers = {};
          this.isSubmited = false;
        }
      });
      modalRef.componentInstance.correctAnswers = this.correctAnswers;
      modalRef.componentInstance.missingQuestion = this.missingQuestion;
      modalRef.componentInstance.angularQuizQns = this.angularQuizQns;
    }

  }
  questionCategory(category: string) {
    switch (category) {
      case 'esay':
        this.angularQuizQns = [...QUIZQUESTIONS.slice(0, 25)];
        break;
      case 'medium':
        this.angularQuizQns = [...mediumQuestionsPart1.slice(0, 5)];
        break;
      case 'advanced':
        this.angularQuizQns = [...QUIZQUESTIONS.slice(0, 3)];
        break;
    }
  }

}
