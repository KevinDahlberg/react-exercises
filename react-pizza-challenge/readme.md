# React Starter

## Description
React Project that is a copy of the Pizza Challenge that I accomplished at Prime.

### Original Assignment
```
Pizza Ordering Application

In this group project, you are going to be building an order application for a Pizza Restaurant! You may use the base project to start, but you are responsible for building out all the Angular Routes, Controllers, and Factories. A Database will not be used in this application, but you are certainly welcome to add one in your free time!

Base Mode

For the base mode, you will need two Angular Views via Angular Routes.

The first will be the actual order screen. Users can select from Small, Medium, or Large sized pizzas. These each need to have a unique price ( $6, $7, and $8 respectively for example ). Then, a user can add additional toppings. You need to have at least 6 toppings. Each topping will add $1 to the total cost of the pizza. A user may only add one of each topping and certainly only select one size. Finally, there needs to be an ' add pizza ' button that adds the pizza to a factory list so that it may be seen on another Angular Route.

The other view (Other Angular Route), needs to show a list of pizzas that have been added. It will need to show the size of the pizza, its toppings, and the total cost of that pizza. Each listed pizza should have two buttons, one to confirm the pizza, the other to cancel the pizza. Canceled pizzas should be deleted altogether. Confirmed pizzas should move to another list in this view.

Hard Mode

Forget that last line. Instead of pizzas going to another place on the previous view, create a whole new view altogether. The third and final view should have a list of confirmed pizzas, their totals, and then a grand total of confirmed pizzas.
```
### Our Assignment
#### Pizza Ordering Application

* Base Mode

For the base mode, you will need two Views via Routes.

The first will be the actual order screen. Users can select from Small, Medium, or Large sized pizzas. These each need to have a unique price ( $6, $7, and $8 respectively for example ). Then, a user can add additional toppings. You need to have at least 6 toppings. Each topping will add $1 to the total cost of the pizza. A user may only add one of each topping and certainly only select one size. Finally, there needs to be an ' add pizza ' button that adds the pizza to a factory list so that it may be seen on another  Route.

The other view, needs to show a list of pizzas that have been added. It will need to show the size of the pizza, its toppings, and the total cost of that pizza. Each listed pizza should have two buttons, one to confirm the pizza, the other to cancel the pizza. Canceled pizzas should be deleted altogether. Confirmed pizzas should move to another list in this view.

* Hard Mode

Forget that last line. Instead of pizzas going to another place on the previous view, create a whole new view altogether. The third and final view should have a list of confirmed pizzas, their totals, and then a grand total of confirmed pizzas.

### To Do List
[ ] First view (order screen)
  - [ ] Pizzas and Prices
  - [ ] at least 6 toppings (adds $1 to the total)
  - [ ] Add Pizza Button
[ ] Second View (confirm screen)
  - [ ] Show list of pizzas, table
  - [ ] Confirm button
  - [ ] Cancel button
[ ] Third View (hard mode - Checkout)
  - [ ] list of confrimed pizzas and total
  - [ ] Buy button

## Technology Used
* React JS

## Setup
1. Download the repo
2. npm install
  - downloads the dependencies

To view App:
1. npm start
2. localhost:3000 in your browser

Production Build:
1. npm run build
2. change the source of build.js from /build.js to assets/build.js

The other script,
```
npm run watch
```
watches the files, like the dev server, but actually builds the build.js file - use this if you don't plan on using the webpack dev server

## Versioning
* 1.0 - initial build and features

## License
GPL 3.0
