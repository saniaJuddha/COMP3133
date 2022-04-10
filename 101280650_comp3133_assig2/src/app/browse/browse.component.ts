import { Component, OnInit } from '@angular/core';
import {GraphqlapiService} from '../service/graphqlapi.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  
  userType: any = null;
 
  username: any = null;

  allBookings: any;

  constructor( private db: GraphqlapiService) {
    
    this.userType = localStorage.getItem('type');
    
    // if(this.userType === null){
    
    //   alert('Login Required to Access this Page! Please Log in');
    
    //   //this.router.navigate(['/']);
    // }
    
    // this.username = localStorage.getItem('username');
   
  }

  ngOnInit(): void {

    this.db.getBookingByCurrentUser().subscribe((bookings: any) => {
    
      this.allBookings = bookings.data.getBookingByCurrentUser;
    
    })
  }

}
