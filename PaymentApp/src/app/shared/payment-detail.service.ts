import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData:PaymentDetail = new PaymentDetail();
  readonly baseURL = 'https://localhost:44398/api/PaymentDetails'
  list : PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailID}`, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
  
}
