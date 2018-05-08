import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { slideUp } from '../../shared/animations/slideUp.animation';
import { AuthService } from '../../services/auth/authentication.service';
import { DataService } from '../../services/data/data.service';
import { HttpResponse } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class RegisterComponent implements OnInit {
  otpSent: boolean = false;
  otpConfirmed: boolean = false;
  otpSentTo: string;
  defaultCC: number = 91;
  otpSentToCC: string;
  isFormError: boolean = false;
  private registrationStep; 
  private OTP_TYPE = "registration"

  registrationPayload: {
      mobile: string,
      cc: string,
      otpType: string
  };

  confirmOtpPayload: {
    mobile: string,
    cc: string,
    otp: string,
    otpType: string
  };

  registerUserPayload: {
    mobile: string,
    cc: string,
    firstName: string,
    lastName: string,
    otpType: string
  };

  @ViewChild('registrationForm') rgForm: NgForm;
  @ViewChild('formError') formError: ElementRef;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private router: Router) { 
    
  }

  ngOnInit() {
  }

  onRegister() {
    let payload;
    this.isFormError = false;
    this.formError.nativeElement.textContent = '';

    if (this.rgForm.valid) {
      console.log('FORM VALUE: ', this.rgForm.value.mobile)
      if (!this.otpSent && !this.otpConfirmed) {
        //First step to receive OTP
        this.registrationStep = "1";

        this.otpSentToCC = this.rgForm.value.cc;

        if (!String(this.otpSentToCC).startsWith("+")) {
          this.otpSentToCC = "+" + this.rgForm.value.cc;
          this.defaultCC = +this.otpSentToCC;
        }

        this.registrationPayload = {
          mobile: this.rgForm.value.mobile,
          cc: this.otpSentToCC,
          otpType: this.OTP_TYPE
        };

        payload = this.registrationPayload;

        this.authService.register(payload, this.registrationStep)
              .subscribe((data) => {
                console.log("STEP 1: ", data);
                this.otpSent = true;
                this.otpSentTo = payload.mobile;
              }, (err) => {
                console.log("ERROR: ", err.error.errorMsg);
                this.isFormError = true;
                
                if(err.error.errorMsg) {
                  this.formError.nativeElement.textContent = err.error.errorMsg;
                } else {
                  this.formError.nativeElement.textContent = "Something went wrong. Please refresh and try again.";
                }
                
              });

      } else if ( this.otpSent && !this.otpConfirmed ) {
        //second step to confirm OTP
        this.registrationStep = "2";

        this.confirmOtpPayload = {
          mobile: this.otpSentTo,
          cc: this.otpSentToCC,
          otp: this.rgForm.value.confirmOTP,
          otpType: this.OTP_TYPE
        }
        
        payload = this.confirmOtpPayload;

        this.authService.register(payload, this.registrationStep)
              .subscribe((data) => {
                console.log("STEP 2: ", data);
                this.otpConfirmed = true;
              },(err) => {
                this.isFormError = true;
                if(err.error.errorMsg) {
                  this.formError.nativeElement.textContent = err.error.errorMsg;
                } else {
                  this.formError.nativeElement.textContent = "Something went wrong. Please refresh and try again.";
                }
              });

      } else {
        /**
         * Third and final step
         * Now user's mobile is verified.
         * User will enter mandatory details now to complete registration.
         */
        this.registrationStep = "3";

        this.registerUserPayload = {
          mobile: this.otpSentTo,
          cc: this.otpSentToCC,
          firstName:  this.rgForm.value.firstName,
          lastName: this.rgForm.value.lastName,
          otpType: this.OTP_TYPE
        }

        payload = this.registerUserPayload;

        this.authService.register(payload, this.registrationStep)
              .subscribe((data: HttpResponse<any>) => {
                console.log("X-AUTH: \n", data.headers.get('x-auth'));
                if (data.headers.get("x-auth")) {
                  this.authService.authenticate(data.headers.get("x-auth"));
                  this.dataService.setUserData(data.body);
                  this.router.navigate(['/']);
                } else {
                  this.rgForm.reset();
                  this.router.navigate(['/login']);
                }
              });
      }
    }
  }

}
