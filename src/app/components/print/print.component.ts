import { Component, OnInit } from '@angular/core';
import { Journey } from '../../models/journey.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor() { }

  journey : Journey;
  user : User;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.journey = JSON.parse(localStorage.getItem('journey-details'))
  }

}
