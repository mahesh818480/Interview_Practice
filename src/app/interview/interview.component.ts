import { Component, Output } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule, QuizComponent],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss'
})
export class InterviewComponent {
  selectedQuestion: any;
  searchField = '';
  searchData: any[] = [];
  dropDown = '';
  selectedDropDown: string = 'angular';
  isSelectQuiz: Boolean = false;
  constructor(private questionService: QuestionService, private route: Router, private modalService: NgbModal,) { }
  questions: any[] = [];

  ngOnInit() {
    this.questions = this.questionService.getAngularQuestion();
    this.searchData = this.questions;
  }
  searchFilter() {
    if (this.selectedDropDown === "angular") {
      this.searchData = this.questionService.getSearchData(this.searchField, this.questions);
    } else {
      const javQuestion = this.questionService.getJavaQuestion();
      this.searchData = this.questionService.getSearchData(this.searchField, javQuestion)
    }
  }
  onQuestionClick(question: any) {
    this.selectedQuestion = question;
    const modalRef = this.modalService.open(DialogBoxComponent);
    modalRef.componentInstance.question = question;
  }
  onChange(event: any) {
    this.isSelectQuiz = false;
    const value = event.target.value;
    this.selectedDropDown = value;
    if (this.selectedDropDown === "java") {
      this.searchData = this.questionService.getJavaQuestion();
    } else {
      this.searchData = this.questions;
    }
  }
  onQuizPage() {
    this.isSelectQuiz = true;
  }
}
