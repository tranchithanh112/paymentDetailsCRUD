import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss'],
})
export class PaymentDetailComponent implements OnInit {
  constructor(public service: PaymentDetailService) {}

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      pmId: 0,
      cardNumber: '',
      cardOwnerName: '',
      expirationDate: '',
      cVV: '',
    };
  }
  onSubmit(form:NgForm) {
    if (this.service.formData.pmId == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }
  insertRecord(form:NgForm) {
    
    this.service.postPaymentDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        alert('submited successfully');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form:NgForm){
    if(confirm('Are you sure to update this ?')){
    this.service.putPaymentDetail().subscribe(res=>{
      this.service.refreshList();
      this.resetForm(form);
      alert('updated successfully');
    },err=>{console.log(err);})
  }
}
}
