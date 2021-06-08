const passport = require('passport')
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const user = require('./models/user')

passport.use(new JWTStrategy({
  jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey : 'TJX'
}, function(jwtPayload, done){
    return user.findByID(jwtPayload.sub)
    .then(user => {
      return done(null, user);
    })
    .catch(err =>{
      return done(err);
    })
}))


module.exports.genToken = user => {
  return jwt.sign({
    iss: 'TJX',
    sub: user.email,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, 'TJX');
}
