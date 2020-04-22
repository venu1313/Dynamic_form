import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dyanmic',
  templateUrl: './dyanmic.component.html',
  styleUrls: ['./dyanmic.component.css']
})
export class DyanmicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}

