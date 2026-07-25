import { Component, HostListener } from '@angular/core';
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
  top:any;
  left:any;

  @HostListener("document:mousemove",['$event'])
  onMousemove($event:any){
    this.top= ($event.pageY-40)+"px";
    this.left= ($event.pageX)+"px";
  }
}
