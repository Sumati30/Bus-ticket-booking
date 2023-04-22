import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { SelectBusService } from 'src/app/services/selectBus.service';
import { RouteService } from '../../services/route.service';
import { Bus } from '../../models/bus.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  userRoute: any;
  modalRef:BsModalRef;
  buses : Bus[] = [];

  constructor(private routeService:RouteService, 
              private bus_service:SelectBusService, 
              private router:Router,
              private modalService:BsModalService) { }

  ngOnInit(): void {
    this.userRoute = JSON.parse( localStorage.getItem('route'));
    console.log('User selected route' , this.userRoute);
    if(!this.userRoute) {
      this.router.navigate([''])
    }

    this.subscription = this.bus_service.castId.subscribe(res => {
      this.getBuses(res);
      console.log('cast-id 1' , res)
    })

  }

  getBuses(res){
    let bus = new Object();
    this.bus_service.getBus(res).subscribe(res => {
      for(let key in res){
        bus = res[key];
        bus['$key'] = key ;
        this.buses.push(bus as Bus);
        console.log('45', this.buses)
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openModal(template: TemplateRef<any>,bus) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal (){
    this.modalRef.hide();
  }
  
  
}
