import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.scss']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populate(pd:PaymentDetail){
    this.service.formData=pd;
  }
  onDelete(id:number){
    if(confirm("Are you sure to delete this ? ")){
      this.service.deletePaymentDetail(id).subscribe(res=>{
        this.service.refreshList();
        alert('Deleted successfully');

      },err=>{console.log(err);})
    }

  }



}
