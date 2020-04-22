import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DyanmicComponent } from './dyanmic/dyanmic.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { Form1Component } from './form1/form1.component';
import { DeshbordComponent } from './deshbord/deshbord.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { Admin1Component } from './admin1/admin1.component';
import { Login1Component } from './login1/login1.component';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    TopMenuComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    DyanmicComponent,
    EmployeeComponent,
    AdminComponent,
    Form1Component,
    DeshbordComponent,
    LoginComponent,
    UserComponent,
    Admin1Component,
    Login1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ServiceService ,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
