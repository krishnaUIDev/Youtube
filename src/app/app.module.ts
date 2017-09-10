import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './utility/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailsComponent,
    SafePipe,
    HomeComponent
  ],
  imports: [
    //ng bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
