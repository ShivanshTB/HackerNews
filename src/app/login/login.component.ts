import { Component, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sendCredentials :any = {};
  storeCredentials :any = [];
  ids: any = {};
  errMsg!: string;
  loginStatus: boolean = false;

  constructor(private userService: HttpService,private router: Router,private dataTransfer: HttpService) { }

  ngOnInit(): void {
    this.getcredentials();
  }
    
    loginForm = new FormGroup({
      loginUsername : new FormControl('',[Validators.required,Validators.minLength(5)]),
      loginPassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
    createForm = new FormGroup({
      usernameCreate : new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(5),Validators.pattern("^[a-z0-9_]+$")]),
      createPassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  
    getcredentials(){
      this.userService.getuser().subscribe((data:any)=>{
        this.storeCredentials = data;
      });
    }
  
  login(){
    this.getcredentials();
    this.ids = this.storeCredentials.filter((e:any)=>{
      return e.username == this.loginForm.value.loginUsername && e.password == this.loginForm.value.loginPassword;
    });
    if(this.ids.length <= 0 ){
      this.errMsg = "Bad login";
      this.createForm.setValue({
        usernameCreate: this.loginForm.value.loginUsername,
        createPassword: this.loginForm.value.loginPassword,
      });
    }else{
      this.loginStatus = true;
      this.dataTransfer.status = this.loginStatus;
      this.dataTransfer.userId = this.loginForm.value.loginUsername;
      this.router.navigate(['/new']);
      this.loginForm.reset();
    }
  }

  create(){
    this.sendCredentials['username'] = this.createForm.value.usernameCreate;
    this.sendCredentials['password'] = this.createForm.value.createPassword;
    this.userService.postUser(this.sendCredentials).subscribe(()=>alert("Account created. Now,you can login")
    ,()=>alert("Account not created, Try again!"));
    this.loginForm.patchValue({
      loginUsername: this.createForm.value.usernameCreate,
    });
    this.createForm.reset();
  }
}
