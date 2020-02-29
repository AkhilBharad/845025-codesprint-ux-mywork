import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacegiftcardsComponent } from './placegiftcards/placegiftcards.component';
import { UpdateGiftcardsComponent } from './update-giftcards/update-giftcards.component';
import { ViewgiftcardsComponent } from './viewgiftcards/viewgiftcards.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [

  {path:'placegiftcards',component:PlacegiftcardsComponent},
  {path:'update-giftcards',component:UpdateGiftcardsComponent},
  {path:'viewgiftcards',component:ViewgiftcardsComponent},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
