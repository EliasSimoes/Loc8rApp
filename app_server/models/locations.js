var mongoose = require('mongoose');


var reviewSchema = new mongoose.Schema({
    author: String,
    rating: { type: Number, require: true, min: 0, max: 5 },
    reviewText: String,
    createdOn: { type: Date, "default": Date.now }

});

var openingTimeSchema = new mongoose.Schema({
    days: { type: String, require: true },
    opening: String,
    closing: String,
    closed: { type: Boolean, require: true }
});

var locationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: String,
    rating: { type: Number, "default": 0, min: 0, max: 5 },
    facilities: [String],
    coords: { type: [Number], index: '2dsphare' },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema); //parametro 1 é o nome do modelo, o parametro 2 é o nome do Schema