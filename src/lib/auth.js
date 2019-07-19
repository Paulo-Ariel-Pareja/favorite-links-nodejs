module.exports = {

    isLoggedIn(req, res, next){
        if (req.isAuthenticated()) {
            console.log('esta autenticado')
            return next();
        }
        console.log('NO estas autenticado')
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next){
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/profile');
    }
}