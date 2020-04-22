import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { DeshbordComponent } from './deshbord/deshbord.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { UserComponent } from './user/user.component';
import { Admin1Component } from './admin1/admin1.component';
import { Login1Component } from './login1/login1.component';


const routes: Routes = [
  {
  path: '', component:HomeComponent,
  children: [
      { path: 'Admin/:name', component:AdminComponent },
      { path: 'Admin1', component:Admin1Component },
      { path: "Employee", component:EmployeeComponent},
      {path: 'Form', component:Form1Component},
      {path: 'Home', component:DeshbordComponent},
      {path: 'Login', component:LoginComponent},
      {path: 'Login1', component:Login1Component},

      { path: "User", canActivate: [AuthGuard],component:UserComponent}


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
