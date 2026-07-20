import { Component, Input, SimpleChange } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {
  constructor(public activeModal: NgbActiveModal){}
    @Input() question: any;
    ngOnInit(){
      console.log(this.question,'===')
    }
    ngOnChanges(changes:SimpleChange){
      console.log('chnage====',this.question)
    }
}
