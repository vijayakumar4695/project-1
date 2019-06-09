import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { Route ,ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-invoiceview',
  templateUrl: './invoiceview.component.html',
  styleUrls: ['./invoiceview.component.css']
})
export class InvoiceviewComponent implements OnInit {
  id:any;
  bind:any;
  result:any={
    OrderID:'',
    InvoiceId:'',
    InvoiceDate:'',
    Amount:'',
  }
  constructor(public routing:ActivatedRoute,public service:DataserviceService) { }

  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id)
      this.service.getInvoice().subscribe(res=>{
      this.bind=res
     console.log(this.bind)
  
  for(let i=0;i<this.bind.length;i++){
    if(this.id===this.bind[i].id){

     this.result.OrderID=this.bind[i].orderid
     this.result.InvoiceId=this.bind[i].id
     this.result.InvoiceDate=this.bind[i].invoicedate
     this.result.Amount=this.bind[i].amount
  
    }
    
   }

 })
  
}
}
