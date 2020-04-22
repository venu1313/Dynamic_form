import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
import { User, Role } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';


@Component({
  selector: 'app-root',
//   template: `
//   <div>
//     <app-form [questions]="questions$ | async"></app-form>
//   </div>
// `,
 templateUrl: './app.component.html',


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;
  Roles: any = ['Admin', 'Author', 'Reader'];
  currentUser: User;

  
    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
  constructor(private service: ServiceService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    this.questions$ = service.getQuestions();
    this.changeText = false;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  title = 'dyanmicform';
  changeText: boolean;
  

  ngOnInit(): void {
this.service.getdata().subscribe(data=>this.sales=data); 
   
  }
 
  sales=[]
  form: FormGroup;
  payLoad = '';
  mouseover(){
   
   }
   counter=1
}
