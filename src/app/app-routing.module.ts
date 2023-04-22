import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search-result/search.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PrintComponent } from './components/print/print.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'search' , component:SearchComponent},
  {path:'user-info', component:UserDetailsComponent},
  {path:'print', component:PrintComponent},
  {path:'**' , redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
