require('dotenv').config();
var User = require('./models/user');
var JwtStrategy = require('passport-jwt-cookiecombo');
passport = require('passport')

passport.use(new JwtStrategy({
  secretOrPublicKey: process.env.AUTH_SECRET
}, (payload, done) => {
  console.log(payload);
  console.log('passport-config');
  return done(null, payload.email);
}));
