import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular';
import {Listing} from '../models/listing'

const allListing = gql`query{
  getListing{
      id
listing_id
listing_title
description
street
city
postal_code
price
email
username
  }
}`;

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  allListing:Listing[] = [];
  


  constructor(private apollo : Apollo) { }

  ngOnInit():void{
    this.apollo.watchQuery<any>({
      query:allListing
    }).valueChanges.subscribe
      (({data})=>{
        console.log(data)
        this.allListing = data.getListing;
      }
    )
  }

}
