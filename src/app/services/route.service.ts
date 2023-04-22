import { Injectable } from '@angular/core';
import { JourneyRoute } from '../models/route.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }
 journey_route ;

 getRoute() {
  return this.journey_route = JSON.parse(localStorage.getItem('route'));
 }

}
