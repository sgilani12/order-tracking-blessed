require('dotenv').config();
var User = require('./models/user');
var JwtStrategy = require('passport-jwt-cookiecombo');

passport.use(new JwtCookieComboStrategy({
  secretOrPublicKey: process.env.AUTH_SECRET
}, (payload, done) => {
  return done(null, payload.user);
}));

opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = process.env.AUTH_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done){
  User.verify(jwt_payload.email).then(user => {
    if(user)
  }
})