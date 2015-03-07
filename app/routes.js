module.exports = function(app, passport) {

//    // process the signup form
//    app.post('/api/signup', passport.authenticate('local-signup', {}),
//             function (err, user) {
//                    if(err)
//                        res.send(err);
//                    console.log(user);
//                    res.json(user);
//            });
    
    // process the login form
    app.post('/api/signup', 
                    passport.authenticate('local-signup', function (err, user, info) {
                        if(err)
                            console.log(err);
                        else if(user){
                            console.log(user);
                            return;
                        }
                        else {
                            console.log(info);
                            return;
                        }   
                    }), function (req, res) {
                            console.log(req.body);
                            res.json(req.body);
                        }
            );
    
    // process the login form
    app.post('/api/login', 
                    passport.authenticate('local-login', function (err, user, info) {
                        if(err)
                            console.log(err);
                        else if(user){
                            console.log(user);
                        }
                        else {
                            console.log(info);
                        }   
                    })
            );
    
};