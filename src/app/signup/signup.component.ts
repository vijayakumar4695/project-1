import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

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
    let data ={
      email:"",
      password:"",
    }
    this.message = 'Success';
    swal("Message",this.message);
      // this.dataservice.regData(res).status
      // this.dataservice.regData(data).subscribe(res=>{
      //   this.data1=res;
      //   this.routing.navigate(['/login']);
      //   console.log(res)
      // })
    }
   
  }
 


