import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string = "";
  private password: string = "";
  private captcha: string = "";
  private email: string = "";
  private alert: boolean = false;
  private passwordLength: boolean = false;
  private noPassword: boolean = false;
  private captchaAlert: boolean = false;
  private emailSent: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private title: Title, private data: DataService) {
    this.title.setTitle('Login');
  }

  ngOnInit() {

  }

  Login() {
    if (this.username != "" && this.password != "" && this.password.length >= 4) {
      this.router.navigate(['home']);
      this.data.username = this.username;
      console.log(this.username);
    }
    else
      this.alert = true;
    if (this.password.length < 4)
      this.passwordLength = true;
  }

  forgotPassword() {
    this.noPassword = true;
  }

  passwordCaptcha() {
    if (this.captcha != "qGphJD" || this.email == "") {
      this.captchaAlert = true;
    }
    else {
      this.emailSent = true;
      this.captchaAlert = false;
      this.noPassword = false;
    }
  }

}
