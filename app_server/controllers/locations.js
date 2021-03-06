/*GET 'home' page */
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader:{
            title:'Loc8r',
            strapline:'find a place to work with wifi'
        },
        sidebar:"Looking for wifi and seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you are looking for",
        locations:
        [
            {
                nome:'Starcups',
                address:'125 High Street, Reading, RG6 1PS',
                rating:'3',
                facilities:['Hot drinks', 'Food', 'Premium WIFI'],
                coords:{lat:-23.571475,long:-46.649059},
                distance:'100m'
            },
            {
                nome:'Cafe Hero',
                address:'125 High Street, Reading, RG6 1PS',
                rating:'4',
                facilities:['Hot drinks', 'Food', 'Premium WIFI'],
                distance:'200m'
            },
            {
                nome:'Burger Queen',
                address:'125 High Street, Reading, RG6 1PS',
                rating:'5',
                facilities:['Hot drinks', 'Premium WIFI'],
                distance:'250m'
            }
        ],
        
    });
};

/*GET 'location info' page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {title:'Starcups'},
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name:'Starcups',
            address:'125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities:['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat:51.455041, lng: -0.9690884
            },
            openingTimes:[{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },{
                days: 'Sunday',
                closed: true 
            }],
            reviews:[{
                author: 'Elias Simoes',
                rating: 5,
                timestamp: '28 Out 2016',
                reviewText: 'Desenvolver essa web app tem sido uma ótima experiência.'
            },{
                author: 'Pablo Juan',
                rating: 5,
                timestamp: '25 Out 2016',
                reviewText: 'Vem com o pai que é sucesso!!!'
            }]
        }
    });
};

/*GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {title:'Review Starcups'}
    });
};

