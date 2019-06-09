import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bind:any;
  constructor(private dataservice:DataserviceService,private routing:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.dataservice.login().subscribe(res=>{
    //   this.bind=res;
    //   console.log(res)
    // })

  }
  onSignIn(value){
    this.spinner.show();
    let data = {
      email:value.Email,
      password:value.Passward
    }
    this.dataservice.login(data).subscribe(res=>{
      // this.bind=res;
      // for(let i=0;i<this.bind.length;i++){
      //  if(value.Email===this.bind[i].Email){
      //  if(value.Password===this.bind[i].Password){
      this.spinner.hide()
      swal.fire({
        type:'success',
        text: res['status'],
      })
    console.log(res)
      this.routing.navigate(['/Audi/order/list']);
    })
}
}
    // else{
    //             swal.fire({
    //               title: 'passward mismatch!',
    //               text: "please type correct password",
    //               type: 'warning',
    //               confirmButtonColor: '#3085d6',
    //               confirmButtonText: 'ok'
    //             }); 
                
    //           }
    //        }
    //      }
    //     }
    //     )}
      //  }

//     this.spinner.show(); 
//     setTimeout(() => { 
//     for(let i=0;i<this.bind.length;i++){
     
//       if(value.Email===this.bind[i].Email){
//         if(value.Password===this.bind[i].Password){
//           swal.fire({
//             title: 'Login Successfull!',
//             type: 'success',
//             confirmButtonColor: '#3085d6',
//             confirmButtonText: 'ok'
//           }); 
          
//           this.routing.navigate(['/Audi/createorder']);
//         }
        
//         else{
//           swal.fire({
//             title: 'passward mismatch!',
//             text: "please type correct password",
//             type: 'warning',
//             confirmButtonColor: '#3085d6',
//             confirmButtonText: 'ok'
//           }); 
          
//         }  
      
//     }
//   }
//   this.spinner.hide();
// }, 1000);
    // }

    // }
