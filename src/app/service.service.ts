import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Isales } from './data';
import { Observable } from 'rxjs';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { of } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  private url1:string="/assets/data.json"
  private url2:string="/assets/login.json"

  constructor(private http:HttpClient) { }
  getdata():Observable<Isales[]>{
    return this.http.get<Isales[]>(this.url2);
  }
  
  getProduct(name: string) {
 
    return name;
  }

  getQuestions() {

    let questions: QuestionBase<string>[] = [


      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'MiddleName',
        label: 'Middle Name',
        // value: 'Bombasto',
        // required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'LastName',
        label: 'Last Name',
        // value: 'Bombasto',
        required: true,
        order: 3
      }),
      new DropdownQuestion({
        key: 'Gender',
        label: 'Gender',
        options: [
          {key: 'Male',  value: 'Male'},
          {key: 'Female',  value: 'Female'},
          {key: 'Other',   value: 'Other'}
        ],
        required: true,
        order: 4
      }),
     

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 5
      }),
      
      new TextboxQuestion({
        key: 'Address',
        label: 'Address',
        type: 'textarea',
        required: true,
        order: 6
      }),
      new TextboxQuestion({
        key: 'Address',
        label: 'State',
        type: 'textbox',
        required: true,
        order: 7
      }),
      new TextboxQuestion({
        key: 'Pin Code',
        label: 'Pin Code',
        type: 'number',
        required: true,
        order: 8
      }),
      new TextboxQuestion({
        key: 'Country',
        label: 'Country',
        type: 'textbox',
        required: true,
        order: 9
      }),
      new TextboxQuestion({
        key: 'Mobile',
        label: 'Moblie',
        type: 'number',
        required: true,
        order: 10
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getQuestions1() {

    let questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'Address',
        label: 'Address',
        type: 'textarea',
        required: true,
        order: 6
      }),
      new TextboxQuestion({
        key: 'State',
        label: 'State',
        type: 'textbox',
        required: true,
        order: 7
      }),
      new TextboxQuestion({
        key: 'Pin Code',
        label: 'Pin Code',
        type: 'number',
        required: true,
        order: 8
      }),
      new TextboxQuestion({
        key: 'Country',
        label: 'Country',
        type: 'textbox',
        required: true,
        order: 9
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  toFormGroup(questions: QuestionBase<string>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

}
