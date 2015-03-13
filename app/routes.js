module.exports = function(app, passport) {

//    // process the signup form
//    app.post('/api/signup', passport.authenticate('local-signup', {}),
//             function (err, user) {
//                    if(err)
//                        res.send(err);
//                    console.log(user);
//                    res.json(user);
//            });
    
    app.post('/api/signin', function(req, res){
        res.json({message : 'This is a message'});
    });
    
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
    
//    // route to log in 
//    app.post('/login', passport.authenticate('local'), function(req, res) 
//             { res.send(req.user); 
//            }); 
    
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
    
};