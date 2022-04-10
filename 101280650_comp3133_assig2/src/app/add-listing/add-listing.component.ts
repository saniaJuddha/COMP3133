import { Component, OnInit } from '@angular/core';
import { GraphqlapiService } from '../service/graphqlapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  
  userType: any;
  
  listingForm: any;
  
  username: any;

  constructor( private db: GraphqlapiService, private router: Router) { 

    this.userType = localStorage.getItem('type');
    
    this.username = localStorage.getItem('username');

    this.listingForm = new FormGroup({

      listing_id: new FormControl("", Validators.required),
      
      listing_title: new FormControl("", Validators.required),
      
      description: new FormControl("", Validators.required),
      
      street: new FormControl("", Validators.required),
      
      city: new FormControl("", Validators.required),
      
      postal_code: new FormControl("", Validators.required),
            
      email: new FormControl("", Validators.required),
      
      price: new FormControl("", Validators.required),
      
      username: new FormControl(this.username)
    
    })
    
    if(this.userType === 'customer'){

      alert('Admin Access Required!');
      
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.listingForm.valid) {
    
      console.log(this.listingForm.value)
    
      this.db.addListing(this.listingForm.value).subscribe((res: any) => {
        
        console.log('listing added')

        alert(`Listing ${res.data.addListing.listing_title} Uploaded`);
    
        this.router.navigate(['/']);
    
      });
    }
  }

}
