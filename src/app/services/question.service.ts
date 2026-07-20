import { Injectable } from '@angular/core';
import { ANGULAR_QUESTION } from '../data/angular-data';
import { JAVA_QUESTIONS } from '../data/java-data';

export interface Question {
  id: number;
  title: string;
  description: string;
  starterCode: string;
  outPut: string

}

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  constructor() { }

  getAngularQuestion() {
    return ANGULAR_QUESTION;
  }
   getJavaQuestion() {
    return JAVA_QUESTIONS;
  }
  getSearchData(searchValue:string,data:Question[]){
    return data.filter((val:any) => val.title.toLocaleLowerCase().includes(searchValue))
  }
}
