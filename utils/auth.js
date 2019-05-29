const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../models/user');

module.exports = function setupAuth(passport){

    passport.use( new LocalStrategy(
        async function(userName,password,done){
            try {
            const user = await userModel.findById(userName).exec();
            if (!user){
                done (null,false,{message: 'no such user!'})
            }
            else if (!user.verifyPassword(password)){
                done (null,false,{message: 'wrong password!'})
            }
            else{return done(null,user)}
            
        }
            catch (e){
                done(e);
            }
            
        }))
    
        passport.serializeUser(function(user, done) {
            done(null, user._id);
          });
          
          passport.deserializeUser(function(id, done) {
            userModel.findById(id, function(err, user) {
              done(err, user);
            });
          });

    }