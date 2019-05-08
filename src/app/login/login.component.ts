import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bind:any;
  constructor(private dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
    
    this.dataservice.getData().subscribe(res=>{
      this.bind=res;
      console.log(res)
    })
  }
  onSignUp(value){
    for(let i=0;i<this.bind.length;i++){
      if(value.email===this.bind[i].email){
        if(value.pswd===this.bind[i].pswd){
          this.routing.navigate(['/Audi']);
        }
        else{
          alert("Password Wrong!");
        }
      }
    }
  
 }

}
