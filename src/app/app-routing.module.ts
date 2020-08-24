import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListComponent } from './containers/card-list/card-list.component';
import { CardDetailsComponent } from './containers/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'card/:id', component: CardDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
