import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  public getAllLaunches(): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches`)
  }

  public getOneLaunch(id:number) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${id}`)
  }
}