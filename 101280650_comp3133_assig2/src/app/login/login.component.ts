import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GraphqlapiService } from '../service/graphqlapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    username: new FormControl("", Validators.required),

    password: new FormControl("", Validators.required)
  
  })

  hide = true;

  constructor( private db: GraphqlapiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {

      this.db.login(this.loginForm.value).subscribe((res: any) => {

        if(res.data?.login == null){ 

          alert("Username Password Incorrect");
          
          // this.router.navigate(['/login']);
        } 
        else {
          localStorage.setItem('token', res.data?.login)

          localStorage.setItem('username', this.loginForm.value.username)
          alert('Login Successful!');

          console.log('login successful')
          
          // this.router.navigate(['/'])  
          // .then(() => {
          //   window.location.reload();
          //});
        } 
      });
    }
  }
}
