import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  admin: any;

  loginStatus: any;

  constructor() { 

    this.loginStatus = localStorage.getItem('token') ? true : false;

    this.admin = localStorage.getItem('type')=== 'admin';
  }

  ngOnInit(): void {
  }
}
