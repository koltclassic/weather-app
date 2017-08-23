# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.
NOTE: You will need to acquire a Wunderground API key to use this project.
Enter you API key into the designated area inside of the app.config.ts file. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## TODO: 
Move weather CRUD stuff to weather service.
Validation for city, state
	- reactive form implementation in component
handle error for user selecting “block” for location request.
handle error for bad api request / response.
clean up observables, probably not doing them optimally (as noted by failure of weather service calls)
Move API key to a private file, add to a .gitignore (if published)
Better styling on weather image response, maybe a background glow or something


## Future Enhancements:
Change background to match the string value of weather from response.
	- ngClass on container, assign string values to background-colors
future / past weather 

