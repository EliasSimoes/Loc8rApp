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
                facilities:['Hot drinks', 'Premium WIFI', 'dIMAS TA AQUI'],
                distance:'250m'
            }
        ],
        
    });
};

/*GET 'location info' page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Location info'
    });
};

/*GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Add review'});
};

