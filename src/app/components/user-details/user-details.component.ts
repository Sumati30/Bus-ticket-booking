import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Journey } from '../../models/journey.model';
import { User } from '../../models/user.model';
import { JourneyRoute } from 'src/app/models/route.model';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  journey : Journey;
  user: User;
  jroute : JourneyRoute;

  constructor(private route:Router, private bookingService:BookingService) { }

  ngOnInit() {
    this.journey = JSON.parse(localStorage.getItem('journey-details'));

    this.jroute=JSON.parse(localStorage.getItem("route"));
      if(!this.jroute) {
        this.route.navigate([''])
      }
  }

  userDetails(form : NgForm){
     
     this.user = {
      user_name :form.value.user_name,
      user_email : form.value.user_email,
      phone_number : form.value.number 
     }
     console.log('userDetails', this.user)
     localStorage.setItem('user' , JSON.stringify(this.user));
     this.route.navigate(['print']);
     this.bookingService.printTicket();
  }

}
