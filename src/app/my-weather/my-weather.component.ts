import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../Location';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/subscription';
import { WeatherService } from '../weather.service';
import { AppConfig } from '../app.config';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    errorMessage: string;

    weatherForm = new FormGroup({
        city: new FormControl('', Validators.required),
        state: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)])
    });

    constructor(private http: HttpClient, private weatherService: WeatherService) { 

    }

    ngOnInit(): void {
        this.getUserLocation().subscribe(resp => {
            this.weatherService.getLocationWeatherLatLong(resp.coords.latitude, resp.coords.longitude).subscribe(data => {
              this.userData = data;  
            });
        }, 
        error => {
            this.errorMessage = error;
        })
    }

    //TODO: Move to weather service
    getLocationWeather() {
        var formVal = this.weatherForm.value;
            this.weatherService.getLocationWeather(formVal.state, formVal.city).subscribe(data => { 
                this.userData = data;
            }, error => {
                this.errorMessage = error;
            });
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
