import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registrationPage: FormGroup;
  submitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private qcs: ServiceService) { }

  ngOnInit(): void {
    this.registrationPage = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.min(10)]]
    });
    this.form = this.qcs.toFormGroup(this.questions);
  }

  submit() {
    this.submitted = true;
    if (this.registrationPage.invalid) {
      return;
    }
  }
  refresh() {
    this.submitted = false;
  }
  @Input() questions: QuestionBase<string>[] = [];
 
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }




}
