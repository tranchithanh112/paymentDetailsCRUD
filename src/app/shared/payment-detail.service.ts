import {PaymentDetail} from '../shared/payment-detail.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  list!:PaymentDetail[];
  formData!:PaymentDetail
  readonly rootURL = 'https://localhost:44387/api'
  constructor(public http:HttpClient) { }
  refreshList(){
    return this.http.get(this.rootURL+'/paymentdetail')
    .toPromise()
    .then((res:any)=> this.list = res)
  }
 postPaymentDetail(){
   return this.http.post(this.rootURL+'/paymentdetail',this.formData)
 }
 putPaymentDetail(){
   return this.http.put(this.rootURL+'/paymentdetail/'+this.formData.pmId,this.formData)
 }
 deletePaymentDetail(id:number){
   return this.http.delete(this.rootURL+'/paymentdetail/'+id)
 }
}
