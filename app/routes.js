module.exports = function(app, passport) {
    
    // process the signup form
    app.post('/api/signup', function(req, res) {
                    passport.authenticate('local-signup', function (err, user, info) {
                        if(err){
                            console.log(err);
                            res.send(err);
                        }
                        else if(user){
                            console.log(user);
                            res.json(user);
                        }
                        else {
                            console.log(info);
                            res.json(info);
                        }   
                    })(req, res);
                }
            );
 
    // process the login form
    app.post('/api/login', function(req, res) {
                    passport.authenticate('local-login', function (err, user, info) {
                        if(err){
                            console.log(err);
                            res.send(err);
                        }
                        else if(user){
                            console.log(user);
                            res.json(user);
                        }
                        else {
                            console.log(info);
                            res.json(info);
                        }   
                    })(req, res);
                }
            );
    
    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/#profile',
            failureRedirect : '/'
        }));
    
    
    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}