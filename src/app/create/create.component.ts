import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public service:DataserviceService,public routing:Router) { }

  ngOnInit() {
  }
  createInvoice(value){
    this.service.createinvoice(value).subscribe(res=>{
     swal.fire({
       type:'success',
       text: res['status'],
     })
      this.routing.navigate(['/Audi/invoice/invoicelist']);
     console.log(res);
    })
  }

}
