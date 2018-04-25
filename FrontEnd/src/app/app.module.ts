import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RugCenterComponent } from './rug-center/rug-center.component';
import { RugDetailComponent } from './rug-detail/rug-detail.component';
import { RugListComponent } from './rug-list/rug-list.component';
import { RugService } from './shared/services/rug.service';


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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
