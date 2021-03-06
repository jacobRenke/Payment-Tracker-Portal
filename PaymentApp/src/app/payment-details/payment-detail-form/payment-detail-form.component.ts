import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';


@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  @ViewChild("editForm") editForm: NgForm;

  constructor(public service:PaymentDetailService, 
    private toastr:ToastrService) { }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    
  }

  insertRecord(){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(this.editForm);
        this.toastr.success('Submitted successfully!', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(){
    if(this.service.formData.paymentDetailID == 0)
      this.insertRecord();
    else
    {
      this.service.putPaymentDetail().subscribe(
        res => {
          this.resetForm(this.editForm);
          this.toastr.info('Updated successfully!', 'Payment Detail Register')
        },
        err => { console.log(err); }
      );
    }
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
