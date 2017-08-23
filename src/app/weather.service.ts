import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from './app.config';

@Injectable()
export class WeatherService {
// this code isn't working 
//     constructor(private http: Http){ }

//   getLocationWeather(state: string, city: string) {
//     this.http.get(AppConfig.apiBase + state + '/' + city + '.json').subscribe(data => {
//       return data;
//     });
//   }

//   getLocationWeatherLatLong(lat, lng):any{
//     this.http.get(AppConfig.apiBase + lat + ',' + lng + '.json').subscribe(data => {
//       console.log(data.json());
//       return data.json();
//     });
//   }

}