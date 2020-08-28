const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user.model')

exports.restrict = async (req, res, next) => {
    try{
        const token = req.header('Authorization');
        if(!token) {
            throw new Error('Invalid Token');
        }
        // Bearer jwttoken
        const pureToken = token.replace('Bearer ', '');
        const data = jwt.verify(pureToken, process.env.SECRET_KEY);
        const user = await UserModel.findById(data._id);

        if(!user || data.exp !== user.expirationDate) {
            throw new Error('Sesion Expirada');
        }

        req.currentUser = user;
        next()
    } catch(err){
        console.error(err);
        res.status(401);
        const error = new Error(err.message)
        next(error)
    }
}