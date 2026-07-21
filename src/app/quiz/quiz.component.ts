import { Component, Input } from '@angular/core';
import { ANGULARQUIZ, QUIZQUESTIONS } from '../data/angular-quiz';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  correctAnswers: any = [];
  isSubmited = false

  ngOnInit() {
    this.angularQuizQns = QUIZQUESTIONS;
  }
  onChange(event: any) {
    this.selectedValue = event;
  }
  onSubmit() {
    this.correctAnswers = [];
    this.isSubmited = true;
    this.angularQuizQns.filter((val) => {
      if (val.selectedOption == val.answer) {
        this.correctAnswers.push(val);
      }
    })
  }

}
