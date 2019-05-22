import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bind:any;
  erase:any;
  price:any;
  amt:any;
  qu:any;
  total:any;
  p:any;
  col:any=[];
  constructor(public dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.dataservice.getOrder().subscribe(res=>{
      this.bind=res;
      console.log(this.bind)
      // for(let i=0;i<this.bind.length;i++){
      //   if(this.qu=this.bind[i].quantity){
      //     this.price=this.bind[i].price
      //     this.amt=this.qu*this.bind[i].price; 
      //    this.col.push(this.amt);
      //    console.log(this.amt)
      //   }
      // }
      //   for(let j=0;j<this.col.length;j++){
      //      this.p = this.col[j];
      //      this.total= eval (this.total+this.p)
      //   }
    
    })
  }
 del(value){
   this.dataservice.delOrder(value.id).subscribe(res=>{
     let data=res;
    this.get();
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }); 
   })
   this.erase=value
   console.log(value.id)
 }

 viewpage(value){
  this.routing.navigate(['/Audi/vieworderid/'+value]);
 }
}
