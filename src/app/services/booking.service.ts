import { Injectable } from '@angular/core';
import { Journey } from '../models/journey.model';
import { User } from '../models/user.model';
import { JourneyRoute } from '../models/route.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  journey : Journey;
  user : User;
  route : JourneyRoute;

  ticket_info = new BehaviorSubject('');
  cast= this.ticket_info.asObservable();


  constructor( private router:Router) { }

  printTicket(){
    this.user = JSON.parse(localStorage.getItem('user'));
    this.journey = JSON.parse(localStorage.getItem('journey-details'));
    this.route = JSON.parse(localStorage.getItem('route'))
    let ticket = {
      journey : this.journey,
      user : this.user,
    }
    this.removeLocalData(ticket);
    this.router.navigate(['print'])
  }

  removeLocalData(ticket){
    this.ticket_info.next(ticket);
    localStorage.removeItem('route');
    localStorage.removeItem('user');
    localStorage.removeItem('journey-details');
  }
}
