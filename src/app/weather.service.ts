import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from './app.config';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherService {
  constructor(private http: Http){ }

  getLocationWeather(state: string, city: string){
    return this.http.get(AppConfig.apiBase + state + '/' + city + '.json')
    .map((response:any) => response.json())
    .catch(this._errorHandler);
  }

  getLocationWeatherLatLong(lat, lng){
    return this.http.get(AppConfig.apiBase + lat + ',' + lng + '.json')
    .map((response:any) => response.json())
    .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server error" );
  }
}