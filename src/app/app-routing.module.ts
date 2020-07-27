import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesDetailComponent } from './coches-detail/coches-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'coches'},
  {path: 'coches', component: CochesListComponent},
  {path: 'coches-edit/:id', component: CochesDetailComponent},
  {path: 'coches-edit', component: CochesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
