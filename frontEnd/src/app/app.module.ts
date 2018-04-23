import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RugListComponent } from './rug-list/rug-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { RugShowListComponent } from './rug-show-list/rug-show-list.component';
import { RugDetailComponent } from './rug-detail/rug-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RugListComponent,
    RugShowListComponent,
    RugDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
