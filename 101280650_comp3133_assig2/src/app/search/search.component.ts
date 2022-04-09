import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular';
import {Listing} from '../models/listing'

const GET_LISTING_BY_CITY =gql`query($city:String!){
  getListingBycity(city:$city){
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
}`


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  findByCity:Listing[] = [];
  listingCity:string = '';

  constructor(private apollo : Apollo) { }

  ngOnInit():void{}

  findListingByCity(){
    this.apollo.watchQuery<any>({
      query:GET_LISTING_BY_CITY,
    variables:{
      city: this.listingCity
    }
    }).valueChanges.subscribe(({data})=>{
      console.log(data)
         this.findByCity = data.getListingByCity;
    })
  }

}
