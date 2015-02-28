module.exports = function(app, passport) {

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {}));
    
};