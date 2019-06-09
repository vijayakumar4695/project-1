import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { Route ,ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vieworderid',
  templateUrl: './vieworderid.component.html',
  styleUrls: ['./vieworderid.component.css']
})
export class VieworderidComponent implements OnInit {
  id:any;
  bind:any;
  result:any={
    OrderID:'',
    productname:'',
    quantity:'',
    orderdate:'',
    option:'',
    price:'',
    ExpectedDeliveryDate:'',
    
  }

  constructor(public routing:ActivatedRoute,public service:DataserviceService,private spinner: NgxSpinnerService,private route:Router) { }

  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id)
       this.service.getOrder().subscribe(res=>{
         this.bind=res['data']
         console.log(this.bind)
         Swal.fire({
          type:'success',
          text:res['status']
        })
       
       
      // this.service.getOrder().subscribe(res=>{
      //   this.bind=res;
       for(let i=0;i<this.bind.length;i++){
       if(this.id===this.bind[i].id){

        this.result.OrderID=this.bind[i].id
        this.result.productname=this.bind[i].productname
        this.result.quantity=this.bind[i].quantity
        this.result.option=this.bind[i].option
        this.result.orderdate=this.bind[i].orderdate
        this.result.price=this.bind[i].price
        this.result.ExpectedDeliveryDate=this.bind[i].ExpectedDeliveryDate
     
       }
       
      }
    })  
      
  }
  back(){
    this.spinner.show();
    this.route.navigate(['/Audi/order/list'])
     this.spinner.hide();
  } 
}