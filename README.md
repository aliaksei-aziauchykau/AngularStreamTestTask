# AngularStream

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0-next.0.

## Requirements

Angular 9 App
You need to create an angular 9 application with the following requirements:

Implementation should be provided with git history starting from angular boilerplate as initial commit.

feel free to use any libraries.

- [x] Create a store with 2 variables in its state with naming up to your decision.
- [x] Initial state of them is -5 and 10 respectively.
- [x] The store should have 3 actions: "change", "increase" and "decrease".
- [x] "change" action does nothing in a reducer.
- [x] "increase" action should increase the first variable by 1.
- [x] "decrease" action should decrease the second variable by 1.

- [x] Create 2 components:
- [ ] The first component is responsible for displaying what it gets in an input property. It should display the input’s value always in a border. If its value is lower than 0 its border and value should be red, if greater then blue.
- [ ] The second component renders the variables from store via the first component.

- [x] When we open the application for the first time we should see the numbers. The page should contain also a start button (implementation is up to you). Once it's pushed the application should start dispatching "change" actions every second. The action causes change in the store state of the 1st variable once and the 2nd variable twice.

- [x] Please implement a stop button.
- [ ] Please implement a reset button.

- [x] Don't use setTimeout / setInterval.
- [ ] Cover the second component by unit tests.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
