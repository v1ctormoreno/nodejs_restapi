module.exports = {
    isAuth (req, res, next){
        if(req.headers.password === '123456') return next();
        else {
            res.status(500).send('no auth')
           
        }
    }
}