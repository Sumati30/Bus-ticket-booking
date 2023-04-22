import { Component, OnInit } from '@angular/core';
import { Journey } from '../../models/journey.model';
import { User } from '../../models/user.model';
import { JourneyRoute } from '../../models/route.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  ticketInfo;

  constructor( private router:Router, private bookingService:BookingService) { }


  ngOnInit() {
    this.bookingService.cast.subscribe(res =>
      this.ticketInfo = res
    )

    if(!this.ticketInfo){
       this.router.navigate([''])
    }
  }
  
 
}
