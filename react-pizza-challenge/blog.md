# Notes and Blog for Pizza project

This is here because you need to think about how you are going to put together your project before you dive in.  I've found that especially true for React projects.

## To Do List
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

## Views
- Home Page
- Confirm Order
- Checkout

## Components
- Nav Bar
- Select Pizza
- Add Toppings to Pizza
- Table of Pizzas w/ buttons
- Table of Pizzas w/ prices
- Buy

## Routes
- Home
- Confirm
- Buy

## Data Stores
- saved pizzas
 - actions:
  - AddToCart
  - RemoveFromCart
  - UpdateCart

## File Structure

- public
- - assets
- - - bundle.js
- - - style.css
- - index.html
- src
- - views
- - - Home
- - - ConfirmOrder
- - - Checkout
- - components
- - - Nav
- - - SelectPizza
- - - PizzaToppings
- - - ConfirmPizzaTable
- - - BuyPizzaTable
- - actions
- - - cart
- - stores
- - - cart
