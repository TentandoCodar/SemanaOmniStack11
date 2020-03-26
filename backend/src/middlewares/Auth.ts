import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class Auth {
    async ignite(req,res, next) {
        const authorization = req.headers.authorization.split(' ')[1];
        jwt.verify(authorization, process.env.SECRET_KEY.toString(), (err,decoded) => {
            if(err) return res.status(403).json({error: "Unauthorized"});
            req.ong = decoded;
            return next();
        });
    }
}

export default new Auth;
