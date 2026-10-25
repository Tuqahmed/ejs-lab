// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const restaurants = require('./data')










app.use(express.static('public')); //all static files are in the public folder






// Routes go here
app.get('/', (req,res)=>{
    res.render('homepage.ejs')
})

app.get('/restaurants', (req,res)=>{
    res.render('all-restaurants.ejs', {
        restaurants: restaurants
    })
}) 
 
app.get('/restaurants/:restaurantId', (req,res)=>{
    console.log(req.params.restaurantId)

    const foundRestaurant = restaurants.find((oneRestaurant)=>{
        return oneRestaurant.id === Number(req.params.restaurantId)
    })
    res.render('restaurants-details.ejs', {restaurant: foundRestaurant})
})




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
