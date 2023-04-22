import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../../models/bus.model'

@Component({
  selector: 'select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {

  @Input('bus') bus:Bus;
  @Output('closeModal') closeModal = new EventEmitter()
  
  selectedSeats : any[] = [];
  msg: boolean = false;
  seats: any = [];
  total: number = 0;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  firstRowSeats = [
    {key:'01', value:'A1'},
    {key:'02', value:'B1'},
    {key:'03', value:'C1'},
    {key:'04', value:'D1'},
    {key:'05', value:'E1'},
    {key:'06', value:'F1'},
    {key:'07', value:'G1'},
    {key:'08', value:'H1'}
  ]

  secondRowSeats = [
    {key:'11', value:'A2'},
    {key:'12', value:'B2'},
    {key:'13', value:'C2'},
    {key:'14', value:'D2'},
    {key:'15', value:'E2'},
    {key:'16', value:'F2'},
    {key:'17', value:'G2'},
    {key:'18', value:'H2'}
  ]

  thirdRowSeats = [
    {key:'21', value:'A3'},
    {key:'22', value:'B3'},
    {key:'23', value:'C3'},
    {key:'24', value:'D3'},
    {key:'25', value:'E3'},
    {key:'26', value:'F3'},
    {key:'27', value:'G3'},
    {key:'28', value:'H3'}
  ]

  fourthRowSeats = [
    {key:'31', value:'A4'},
    {key:'32', value:'B4'},
    {key:'33', value:'C4'},
    {key:'34', value:'D4'},
    {key:'35', value:'E4'},
    {key:'36', value:'F4'},
    {key:'37', value:'G4'},
    {key:'38', value:'H4'}
  ]
  Seat(e){
    if(this.seats.length > 3){
      this.msg = true;
    }else{
      this.seats.push(e.value);
      document.getElementById(e.value).innerHTML = "<img src='../../../assets/img/bseat.png'>" ;
      let seat ={
        seat : e.value ,
        fare : this.bus.fare,
        seat_class : 'Economy class'
      }
      this.showSeats(seat);
      this.totalFare(this.bus.fare);
    }
    
  }

  showSeats(seat){
    this.selectedSeats.push(seat);
    console.log('Details',this.selectedSeats);
  }

  totalFare(fare){
    this.total = this.total + fare ;
  }

  confirm(){
    let route = JSON.parse(localStorage.getItem("route"));
    console.log('route', route);
   let journey = {
      fromCity : route.from_city,
      toCity : route.to_city,
      dep_date : route.departure,
      coach_type : this.bus.coach_type,
      fare : this.bus.fare,
      bus_name : this.bus.name,
      dep_time : this.bus.time,
      seat_class : this.selectedSeats[0].seat_class,
      total_fare : this.total,
      seat_name  : this.seats
   }
   console.log('Journey details' , journey);
   this.route.navigate(['user-info']);
   this.closeModal.emit();

   localStorage.setItem('journey-details', JSON.stringify(journey));
  }


}
