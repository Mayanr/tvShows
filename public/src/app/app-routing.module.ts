import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

const routes: Routes = [
  { path: 'shows', component: AllShowsComponent},
  { path: 'shows/:id', component: ViewDetailsComponent},
  { path: 'shows/topRated', component: TopRatedComponent},
  { path: '', pathMatch: 'full', redirectTo: '/shows' },
  { path: '**', component: AllShowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
