import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

    if(
      localStorage.getItem('token') !== null){
      
        localStorage.removeItem('token');
      
        localStorage.removeItem('username');
      
        localStorage.removeItem('type');

        alert('Log Out Successful!');
        
        console.log('User Logged Out!')
        
        this.router.navigate(['/'])
    }
  }


}
