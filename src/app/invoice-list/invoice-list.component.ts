import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  data:any;
  bind:any;
  constructor(public dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
    this.get();
  }
//   get(){
//     this.dataservice.getInvoice().subscribe(res=>{
//       this.bind=res['data'];
//       console.log(this.bind)
//       console.log(res)
//     })
// }
  get(){
    this.dataservice.getInvoice().subscribe(res=>{
      this.bind=res;
      console.log(this.bind)
      console.log(res)
    })
}
}
