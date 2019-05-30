import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data:any;
  bind:any;
  erase:any;
  config: any;
  constructor(public dataservice:DataserviceService,private routing:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.dataservice.getOrder().subscribe(res=>{
      this.bind=res['data'];
      console.log(this.bind)
      console.log(res)
    })
    
   
  //   this.spinner.show(); 
  //   setTimeout(() => { 
  //   this.dataservice.getOrder().subscribe(res=>{
  //     this.bind=res['data'];
  //     console.log(this.bind)
  //   })
  //   this.spinner.hide();
  // }, 1000);
  }
 
 
//  del(value){
//   this.spinner.show(); 
//    this.dataservice.delOrder(value).subscribe(res=>{
//     swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       type: 'warning',
//       confirmButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!'
//     }); 
//      let data=res; 
//     this.get();
//     this.spinner.hide();
//    })
//    this.erase=value
//  }
 
del(value){
  this.spinner.show();
  this.dataservice.delOrder(value).subscribe(res=>{
    this.spinner.hide();
    this.data=res['data']
    swal.fire({
      type:'success',
      text:res['status']
    })
    console.log(res)
  // swal.fire({
  //         title: 'Are you sure?',
  //         text: "You won't be able to revert this!",
  //         type: 'warning',
  //         confirmButtonColor: '#3085d6',
  //         confirmButtonText: 'Yes, delete it!'
  //       }).then((result) => {
  //         if (result.value) {
  //           swal.fire(
  //             'Deleted!',
  //             'Your file has been deleted.',
  //             'success'
  //           )
  //         }
  //       })
      }
  )}
 ctchange(){
  this.spinner.show();
   this.routing.navigate(['/Audi/createorder'])
   this.spinner.hide();

 }

  
 }


