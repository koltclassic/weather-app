import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyWeatherComponent } from './my-weather/my-weather.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    MyWeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
