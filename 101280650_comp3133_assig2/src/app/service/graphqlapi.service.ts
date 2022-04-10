import { Injectable } from '@angular/core';
import {query} from '@angular/animations'
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlapiService {

  constructor(private apollo: Apollo) { }

  //for register page
  addUser(formValues: any){
    let mutation = this.apollo.mutate({
      mutation: gql`
      mutation addUser(
        $username: String!,
        $firstname: String!,
        $lastname: String!,
        $password: String!,
        $email: String!,
        $type: String!
      ){
        addUser(
          username: $username,
          firstname: $firstname,
          lastname: $lastname,
          password: $password,
          email: $email,
          type: $type,
        ){
          username
          firstname
          lastname
          password
          email
          type
        }
      }`,
      variables: formValues
    })
    return mutation;
  }

  //for user login
  login(formValues: any) {
    let mutation = this.apollo.mutate({
      mutation: gql`
        mutation login(
          $username: String!,
          $password: String!
        ) {
          login(
            username: $username,
            password: $password
          ) 
        }
      `,
      variables: formValues
    })
    return mutation;
  }

  
  getCurrentUser() {
    let query = this.apollo.query({
      query: gql`{
        getCurrentUser{
          type
        }
      }
      `
    })
    return query;
  }


  // getListingByCurrentAdmin() {
  //   let query = this.apollo.query({
  //     query: gql`{
  //       getListing{
  //         id
  //         listing_id
  //         listing_title
  //         description
  //         street
  //         city
  //         postal_code
  //         price
  //         email
  //         username
  //       }
  //     }`
  //   })
  //   return query;
  // }

  //for home page
  getListing() {
    let query = this.apollo.query({
      query: gql`{
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
      }`
    })
    return query;
  }

  //for search page
  getListingBycity(formValues: any) {
    let query = this.apollo.query({
      query: gql`
        query getListingBycity($city: String!){
          getListingBycity(city: $city){
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
        }
      `,
      variables: { city: formValues }
    })
    return query;
  }

  //for add-booking page
  addBooking(formValues: any) {
    let mutation = this.apollo.mutate({
      mutation: gql`
      mutation addBooking(
        $listing_id: String!,
        $booking_id: String!,
        $booking_start: String!,
        $booking_end: String!
        ) {
            addBooking(
              listing_id: $listing_id,
              booking_id: $booking_id,
              booking_start: $booking_start,
              booking_end: $booking_end
          ) 
          {
            listing_id
            booking_id
            booking_date
            booking_start
            booking_end
            username
          }
        }`,
      variables: formValues
    })
    return mutation;
  }

  //for browse page
  getBookingByCurrentUser() {
    let query = this.apollo.query({
      query: gql`{
        getBookingByCurrentUser{
          id,
          listing_id,
          booking_id,
          booking_date,
          booking_start,
          booking_end,
          username
        }
      }`
    })
    return query;
  }

  //for add-listing page
  addListing(formValues: any){
    let mutation = this.apollo.mutate({
      mutation: gql`
      mutation addListing(
        $listing_id: String!,
        $listing_title: String!,
        $description: String!,
        $street: String!,
        $city: String!,
        $postal_code: String!,
        $price: Float!,
        $email: String!,
        $username: String!
      ){
        addListing(
          listing_id: $listing_id,
          listing_title: $listing_title,
          description: $description,
          street: $street,
          city: $city,
          postal_code: $postal_code,
          price: $price,
          email: $email,
          username: $username
        ){
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
      }`,
      variables: formValues
    })
    return mutation;
  }
}
