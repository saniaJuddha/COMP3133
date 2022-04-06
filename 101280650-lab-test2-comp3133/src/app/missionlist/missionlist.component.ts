import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionDetailsArray:any;

  constructor(private spacexapiService : SpacexapiService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches() {
    this.spacexapiService.getAllLaunches().subscribe((response: any)=>{
      console.log(response);
      this.missionDetailsArray = response;
    }, err =>{
      console.log(err);
    })
  }

  details(id:number){
       location.href=`missiondetails/${id}`
  }

}
