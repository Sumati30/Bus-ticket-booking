import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { JourneyRoute } from '../../models/route.model';
import { SelectBusService } from '../../services/selectBus.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private busService:SelectBusService) { }

  ngOnInit(): void {
  }

  place : Place[] = [];

  SearchBus(form:NgForm){
     console.log(form.value);

     let destination;
     this.place.filter(item => {
      if(item.key == form.value.tocity){
        destination = item.value;
      }
     })

     let route : JourneyRoute = {
      from_city : form.value.fromcity ,
      to_city : destination,
      departure : form.value.depdate 
     }

     localStorage.setItem("route" , JSON.stringify(route));
     let routeId = form.value.tocity ;
     this.busService.setRouteId(routeId);
     this.route.navigate(['search']);
  }

  leave(e){
    let leavingFrom = e.target.value;
    console.log("leavingFrom", leavingFrom);

    if(leavingFrom == 'Bangalore'){
      this.place = [
        {key:'2209002', value:'Pune'} ,
        {key:'2209001', value:'Mumbai'} ,
        {key:'2209003', value:'Hyderabad'} 
      ]
    }else if(leavingFrom == 'Pune'){
      this.place = [
        {key:'1109001', value:'Bangalore'} ,        
        {key:'1109004', value:'Mumbai'} ,
        {key:'1109005', value:'Hyderabad'}
      ]
    }else if(leavingFrom == 'Chennai'){
      this.place = [
        {key:'3309003', value:'Bangalore'} ,
        {key:'3309001', value:'Hyderabad'} ,
        {key:'3309002', value:'Mysore'} ,
      ]
    }
  }
}

export class Place {
  key : string;
  value : string;
}

