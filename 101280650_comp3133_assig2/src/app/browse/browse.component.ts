import { Component, OnInit } from '@angular/core';
import {GraphqlapiService} from '../service/graphqlapi.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  
  userType: any = null;
 
  username: any = null;

  allBookings: any=[];

  constructor( private db: GraphqlapiService, private router:Router) {
    
    this.userType = localStorage.getItem('type');
    
    if(this.userType === null){
    
      alert('Login Required to Access this Page! Please Log in');
    
      this.router.navigate(['/']);
    }
    
    this.username = localStorage.getItem('username');
   
  }

  ngOnInit(): void {

    this.db.getBookingByCurrentUser().subscribe((allBookings: any) => {
    
      this.allBookings = allBookings.data.getBookingByCurrentUser;
    
      console.log(allBookings)
    });
  }

}
