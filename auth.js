const auth = require('basic-auth');

const admins = {};

module.exports = function(req, res, next){
    const user = auth(req);

    if(!user || !admins[user.name] || admins[user.name].password !== user.pass){
        res.set('WWW-Authenticate', 'Basic realm="hrmmm"');
        return res.status(401).send('<h1>None shall pass!</h1>');
    }
    return next();
};
