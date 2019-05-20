import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data1:any;
  message:any;
  user={} as User
  userId={
    uid:''
  }
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(public dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
  }
  onSignUp(value){
    console.log(value)
    // let data ={
    //   fname:"",
    //   email:"",
    //   password:"",
    // }
    // this.message = 'Success';
    // alert(this.message);
    // this.routing.navigate(['/login'])
      this.dataservice.regData(value).then(res=>{
        this.data1=res;
        this.routing.navigate(['/login']);
        console.log(res)
      })
    }
   
  }
 


