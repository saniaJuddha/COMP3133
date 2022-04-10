import { Component, OnInit } from '@angular/core';
import { GraphqlapiService } from '../service/graphqlapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  allListing: any;

  bookingForm: any;

  listingId: any = null;
  
  username: any = null;
  
  userType: any = null;

  constructor( private db: GraphqlapiService, private router1: ActivatedRoute, private router:Router) { 
    this.listingId = this.router1.snapshot.params['id'];
   
    this.username = localStorage.getItem('username');
   
    this.userType = localStorage.getItem('type');

    this.bookingForm = new FormGroup({
      
      booking_id: new FormControl("", Validators.required),
      
      booking_start: new FormControl("", Validators.required),
      
      booking_end: new FormControl("", Validators.required),
      
      listing_id: new FormControl(this.listingId)
    })

    
    if(this.userType === null){

      alert('Login Required!');
      
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(this.bookingForm.valid) {
    
      this.db.addBooking(this.bookingForm.value).subscribe((res: any) => {
    
        alert(`Booking ${res.data.addBooking.booking_id} Successful`);
        console.log('booking created')

        this.router.navigate(['/browse']);
    
      });
    }
  }

}
