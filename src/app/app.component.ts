import { Component } from '@angular/core';
import { InterviewComponent } from './interview/interview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InterviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview-practice';
}
