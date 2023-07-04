import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './component/movie/movie.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';

const routes: Routes = [
  {path:'',component:MovieComponent},
  {path:'movie/:id',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
