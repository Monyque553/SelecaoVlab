import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGameComponent } from './details-game/details-game.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsGameComponent },
  { path: '', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
