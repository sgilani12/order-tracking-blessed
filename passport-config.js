require('dotenv').config();
var User = require('./models/user');
var JwtStrategy = require('passport-jwt-cookiecombo');
passport = require('passport')

passport.use(new JwtStrategy({
  secretOrPublicKey: process.env.AUTH_SECRET
}, (payload, done) => {
  return done(null, payload.email);
}));
