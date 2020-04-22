import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../question-base';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form1',
  // templateUrl: './form1.component.html',



    template: `
  <div>
    <app-form [questions]="questions$ | async"></app-form>
  </div>
`,
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(private service: ServiceService) {
    this.questions$ = service.getQuestions();
    this.changeText = false;
  }

  title = 'dyanmicform';
  changeText: boolean;
  

  ngOnInit(): void {
  }

}
