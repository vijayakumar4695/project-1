import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { Route ,ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  bind:any;
  edit:any;
 bindData:any={
    OrderID:'',
    productname:'',
    quantity:'',
    orderdate:'',
    option:'',
    price:'',
    ExpectedDeliveryDate:'',
 }
  constructor(public routing:ActivatedRoute,private service:DataserviceService,private route:Router,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id)
    this.service.getOrder().subscribe(res=>{
      this.bind=res['data']
      console.log(this.bind)
      for(let i=0;i<this.bind.length;i++){
        if(this.id===this.bind[i].id){
         this.bindData.OrderID=this.bind[i].id
         this.bindData.productname=this.bind[i].productname
         this.bindData.quantity=this.bind[i].quantity
         this.bindData.option=this.bind[i].option
         this.bindData.orderdate=this.bind[i].orderdate
         this.bindData.price=this.bind[i].price
         this.bindData.ExpectedDeliveryDate=this.bind[i].ExpectedDeliveryDate
        }
       }
    })

  }
  update(){
    this.spinner.show();
    this.service.updated(this.bindData).subscribe(res=>{
    this.edit=res;
    this.spinner.hide();
    console.log(res)
    Swal.fire({
      type:'success',
      text:res['status']
    })
    if(res['status']='Updated successfully'){
      this.route.navigate(['/Audi/order/list'])
    }
    else{
      this.route.navigate(['/Audi/order/update'])
    }
    })
  }

}
