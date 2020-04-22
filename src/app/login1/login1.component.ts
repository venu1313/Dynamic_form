import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  sales=[]
  username=""
  password=""
  constructor(private service:ServiceService,private router: Router) {
    
   }

  ngOnInit(): void {
    this.service.getdata().subscribe(data=>this.sales=data); 
  
    
  }
flag=false

role=' '
name=''
id=''
Login()
{
  for(let use of this.sales)
  {
    if(this.username===use.username && this.password===use.password )
    {
      this.flag=false
      this.role=use.role;
      this.name=use.name;
      this.id=use.id;
      break;
     // this.router.navigate(['/Mangerpage']);
    }
    this.flag=true
  }
}
}
