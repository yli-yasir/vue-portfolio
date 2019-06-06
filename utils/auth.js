const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = function setupAuth(passport) {
  passport.use(
    new LocalStrategy(async function(userName, password, done) {
      try {
        const user = await userModel.findById(userName).exec();

        if (!user) {
          console.log('no such user')
          done(null, false, { message: "no such user!" });
          return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          console.log('wrong pass')
          done(null, false, { message: "wrong password!" });
          return;
        }

        return done(null, user);
        
      } catch (e) {
        done(e);
      }
    })
  );
};
