// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {

    console.log( Math.round(meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100)))
    
}