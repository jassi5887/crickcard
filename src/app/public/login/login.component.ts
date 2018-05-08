import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { slideUp } from '../../shared/animations/slideUp.animation';
import { AuthService } from '../../services/auth/authentication.service';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ slideUp ],
  host: { '[@slideUp]': '' }
})
export class LoginComponent implements OnInit {
  otpSent: boolean = false;
  otpConfirmed: boolean = false;
  otpSentTo: string;
  defaultCC: number = 91;
  otpSentToCC: string;
  isFormError: boolean = false;
  private loginStep; 
  private OTP_TYPE = "login";

  loginPayload: {
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

  creatAuthTokenPayload: {
    mobile: string,
    cc: string
  }

  @ViewChild('loginForm') lgForm: NgForm;
  @ViewChild('formError') formError: ElementRef;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    let payload;
    this.isFormError = false;
    this.formError.nativeElement.textContent = '';

    if (this.lgForm.valid) {
      if (!this.otpSent && !this.otpConfirmed) {
        //First step to receive OTP
        this.loginStep = "1";

        this.otpSentToCC = this.lgForm.value.cc;

        if (!String(this.otpSentToCC).startsWith("+")) {
          this.otpSentToCC = "+" + this.lgForm.value.cc;
          this.defaultCC = +this.otpSentToCC;
        }

        this.loginPayload = {
          mobile: this.lgForm.value.mobile,
          cc: this.otpSentToCC,
          otpType: this.OTP_TYPE
        };

        payload = this.loginPayload;

        this.authService.login(payload, this.loginStep)
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
        this.loginStep = "2";

        this.confirmOtpPayload = {
          mobile: this.otpSentTo,
          cc: this.otpSentToCC,
          otp: this.lgForm.value.confirmOTP,
          otpType: this.OTP_TYPE
        }
        
        payload = this.confirmOtpPayload;

        this.authService.login(payload, this.loginStep)
              .subscribe((data) => {
                //success (status 200) here means OTP was confirmed
                console.log("STEP 2: ", data);
                this.loginStep = "3";
                this.creatAuthTokenPayload = {
                  mobile: this.otpSentTo,
                  cc: this.otpSentToCC
                }
                payload = this.creatAuthTokenPayload;
                this.authService.login(payload, this.loginStep)
                    .subscribe((data: HttpResponse<any>) => {
                      if (data.headers.get("x-auth")) {
                        this.authService.authenticate(data.headers.get("x-auth"));
                        this.dataService.setUserData(data.body);
                        this.otpConfirmed = true;
                        this.router.navigate(['/']);
                      } else {
                        this.lgForm.reset();
                        this.isFormError = true;
                        this.formError.nativeElement.textContent = "Something went wrong. Please refresh and try again.";
                      }
                    }, (err) => {
                      this.isFormError = true;
                
                      if(err.error.errorMsg) {
                        this.formError.nativeElement.textContent = err.error.errorMsg;
                      } else {
                        this.formError.nativeElement.textContent = "Something went wrong. Please refresh and try again.";
                      }
                    });
              }, (err) => {
                this.isFormError = true;
                
                if(err.error.errorMsg) {
                  this.formError.nativeElement.textContent = err.error.errorMsg;
                } else {
                  this.formError.nativeElement.textContent = "Something went wrong. Please refresh and try again.";
                }
              });

      }
    }
  }

  onConfirmOtp() {
    //this.authService.login();
  }

}
