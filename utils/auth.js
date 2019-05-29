const LocalStrategy = requier('passport-local').Strategy;
const userModel = require('../models/user');

module.exports = new LocalStrategy(
    async function(userName,password,done){
        try {
        const user = await userModel.findById({userName}).exec();
        if (!user){
            done (null,false,{message: 'no such user!'})
        }
        if (!user.verifyPassword(password)){
            done (null,false,{message: 'wrong password!'})
        }
        
        return done(null,user)
    }
        catch (e){
            done(e);
        }
        
    }
)