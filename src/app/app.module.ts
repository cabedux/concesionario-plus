import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CochesDetailComponent } from './coches-detail/coches-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CochesGridComponent } from './coches-list/coches-grid/coches-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesListComponent,
    CochesDetailComponent,
    HeaderComponent,
    LoadingComponent,
    CochesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
