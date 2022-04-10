import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'addbooking/:id', component:AddBookingComponent},
  {path: 'home',redirectTo:'/',pathMatch:'full'},
  {path: 'addlisting', component:AddListingComponent},
  {path: 'browse', component:BrowseComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'search', component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
