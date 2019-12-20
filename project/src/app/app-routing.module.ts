import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { TrainersComponent } from './trainers/trainers.component';


const routes: Routes = [
  {path: '', component: PriceComponent},
  {path: 'trainers', component: TrainersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
