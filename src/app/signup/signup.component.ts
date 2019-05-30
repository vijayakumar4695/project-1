import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
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

  constructor(public dataservice:DataserviceService,private routing:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
  onSignUp(value){
    this.spinner.show();
    this.dataservice.signup(value).subscribe(res=>{
    this.spinner.hide()
    swal.fire({
      type:'success',
      text: res['status'],
    })
    this.routing.navigate(['/login']);
    console.log(res);
  })
   
   
   
    // this.spinner.show();
    // console.log(value)
    // let data ={
    //   fname:"",
    //   email:"",
    //   password:"",
    // }
    // this.message = 'Success';
    // alert(this.message);
    // this.routing.navigate(['/login'])
    // setTimeout(() => {
    //   this.dataservice.regData(value).then(res=>{
    //     this.data1=res;
    //     swal.fire({
    //       title:'Account create successfully!',
    //       type:'success',
    //       confirmButtonColor: '#3085d6',
    //       confirmButtonText: 'ok'
    //     }); 
        
    //     this.routing.navigate(['/login']);
      
    //     console.log(res)
    //   })
    //   this.spinner.hide();
    // }, 1000);


    }
   
  }
 


