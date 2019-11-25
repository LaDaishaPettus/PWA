require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRoutes = require('./routes')

const app = express()

const ATLAS_URI = process.env.ATLAS_URI || 'mongodb://localhost/auth'
const PORT = process.env.PORT || 3001

mongoose.set('useCreateIndex', true)
mongoose.connect(ATLAS_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
	res.json({ message: "API root" })
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})


// var products = [
// 	{
// 		"ProductName": "Aadvik 2 Piece Living Room Set", "ProductID": 1, "CategoryID": 1, "Category": "Living Room", "About": "Anchor your living room in glamorous style with this chic two-piece living room set. Including one sofa and one loveseat each piece is founded on a solid wood frame.", "Images": "/images/product1.png", "price": 1229.98
// 	},
// 	{
// 		"ProductName": "Kraker 2 Piece Living Room Set", "ProductID": 2, "CategoryID": 1, "Category": "Living Room", "About": "Break the mold of modernism with Kraker 2 Piece Living Room Set that features a unique multi-dimensional double-layer seat cushion that extends beneath the armrest holstered with a metal frame", "Images": "/Images/product2.png", "price": 689.99
// 	},
// 	{
// 		"ProductName": "Marti Hickory Modern 2 Piece Living Room Set", "ProductID": 3, "CategoryID": 1, "Category": "Living Room", "About": "Founded atop smooth, clear chrome feet, this Marti Hickory Modern 2 Piece Living Room Set is crafted with a solid birch frame and filled with foam for a bit of cushioning as it seats up", "Images": "/Images/product3.png", "price": 1239.99
// 	},
// 	{
// 		"ProductName": "Miranda Sectional", "ProductID": 4, "CategoryID": 1, "Category": "Living Room", "About": "this U-shaped sectional goes glam in any den or family room. For comfort, its rolled back, track arms, and foam-filled cushions are wrapped, while chrome metal legs complete the look with a polished touch.", "Images": "/Images/product4.png", "price": 1751.99
// 	},
// 	{
// 		"ProductName": "Paes 3 Piece Living Room Set", "ProductID": 5, "CategoryID": 1, "Category": "Living Room", "About": "Looking to create a warm, cozy and inviting backdrop to your living room or seating area? Then consider this 3 piece contemporary reversible sofa-chaise with matching loveseat and ottoman for all your decorating needs.", "Images": "/Images/product5.png", "price": 1999.99
// 	},
// 	{
// 		"ProductName": "Ashlyn 2 Piece Living Room Set", "ProductID": 6, "CategoryID": 1, "Category": "Living Room", "About": "It's wide and soft seat and back cushions make it inviting to rest, relax and enjoy a summers day. It also includes nickel finished stud trimming on the front of the armrest and lower section of the seating. This sofa set is a must for the living room.", "Images": "/Images/product6.png", "price": 829.99
// 	},
// 	{
// 		"ProductName": "Gilma Canopy Bed",
// 		"ProductID": 7,
// 		"CategoryID": 2,
// 		"Category": "BedRoom",
// 		"About": "The Canopy Bed is a sleek and modern bed with a dramatic presence that will be sure to become the centerpiece of your bedroom. Made out of metal,it’s a sturdy structure that will stand the test of time. This four-poster canopy bed features a crisscross headboard and footboard to give your space a touch of glam.",
// 		"Images": "/Images/product7.png",
// 		"price": 256.82
// 	},
// 	{
// 		"ProductName": "Ruthann Upholstered Storage Platform Bed", "ProductID": 8, "CategoryID": 2, "Category": "BedRoom", "About": "This beautiful upholstered bed was designed with large spaces in mind, the velvet platform extends several inches around the mattress giving you more room to sit as well as rest. This peice is perfect to add a touch of modern to your bedroom.", "Images": "Images/product8.png", "price": 879.99
// 	}

// ]

// var Product = require('./models/products.js');
// Product.collection.insertMany(products, function (err, docs) {
// 	if (err) {
// 		return console.error(err);
// 	} else {
// 		console.log("multiple documents inserted")
// 	}
// })