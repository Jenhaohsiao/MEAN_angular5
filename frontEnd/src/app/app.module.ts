import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RugCenterComponent } from './rug-center/rug-center.component';
import { AppRoutingModule } from './/app-routing.module';
import { RugListComponent } from './rug-list/rug-list.component';
import { RugDetailComponent } from './rug-detail/rug-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RugCenterComponent,
    RugListComponent,
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
