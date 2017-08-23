import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../Location';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/subscription';
import { WeatherService } from '../weather.service';
import { AppConfig } from '../app.config';

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'my-weather',
  templateUrl: './my-weather.component.html',
  styleUrls: ['./my-weather.component.css', '../weather.css'],
})

    export class MyWeatherComponent implements OnInit{
    results: any;
    weather: any;
    location: Location;
    userData: any;

    constructor(private http: HttpClient, private weatherService: WeatherService) { 

    }

    ngOnInit(): void {
        var userData = this.getUserLocation().subscribe(resp => {
        this.getLocationWeatherLatLong(resp.coords.latitude, resp.coords.longitude);
        }, error => {
        return false;
        })
    }

    //TODO: Move to weather service
    getLocationWeather(state: string, city: string) {
    this.http.get(AppConfig.apiBase + state + '/' + city + '.json', {observe: 'response'}).subscribe(data => {
        this.userData = data;
        console.log(data);
    }, error => {
        console.log(error);
        return false;
    })
    }

    //TODO: Move to weather service
    getLocationWeatherLatLong(lat, lng){
    this.http.get(AppConfig.apiBase + lat + ',' + lng + '.json', {observe: 'response'}).subscribe(data => {
        this.userData = data;
        console.log(this.userData);
    })
    }

    getUserLocation():Observable<any> {
    return Observable.create(observer => {
        if(window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error) => observer.error(error)
            );
        } else {
            observer.error('Unsupported Browser');
        }
    });
    }
}
