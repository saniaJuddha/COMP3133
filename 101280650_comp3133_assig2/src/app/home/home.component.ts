import { Component, OnInit } from '@angular/core';
import { GraphqlapiService } from '../service/graphqlapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allListing:any=[];

  loginStatus: boolean = false;

  constructor( private db: GraphqlapiService) { }

  ngOnInit(): void {

    this.db.getListing().subscribe((allListing: any) => {
    
      this.allListing = allListing.data.getListing;
    
      console.log(allListing)
    });
    
    if(localStorage.getItem('token')){

      this.db.getCurrentUser().subscribe((res: any) => {

        localStorage.setItem('type', res.data?.getCurrentUser.type)

        console.log(res.data.getCurrentUser.type)
     
      })

      this.loginStatus = true;
      
    }
  }
}
