import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bind:any;
  erase:any;
  col:any=[];
  price:any;
  amt:any;
  qu:any;
  total:any;
  p:any;
  constructor(public dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.dataservice.getOrder().subscribe(res=>{
      this.bind=res;
      for(let i=0;i<this.bind.length;i++){
        if(this.price=this.bind[i].price){
          this.qu=this.bind[i].quantity
          this.amt=this.qu*this.bind[i].price; 
         this.col.push(this.amt);
        }
      }
        for(let j=0;j<this.col.length;j++){
           this.p = this.col[j];
           this.total = eval(this.total+this.p)
           console.log(this.total)
        }
    
    })
  }
 del(value){
   this.dataservice.delOrder(value.id).subscribe(res=>{
     let data=res;
     this.get();
   })
   this.erase=value
   alert("Deleted Successfully")
   console.log(value.id)
 }

 viewpage(value){
  this.routing.navigate(['/Audi/vieworderid/'+value]);
 }
}
