import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit{

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
      console.log(this.data);
  }
}
