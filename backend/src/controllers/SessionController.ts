import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const prisma = new PrismaClient();


class SessionController {
    async login(req,res) {
        const {email, password} = req.body;
        const ong = await prisma.ong.findOne({
            where: {
                email
            },
        })

        const compare = await bcrypt.compare(password, ong.password);
        delete ong.password;
        if(!compare) {
            return res.status(403).json({error: "Unauthorized"});
        }
        await prisma.disconnect();
        const token = jwt.sign({id: ong.id}, process.env.SECRET_KEY.toString(), {
            expiresIn: 3600
        });
        return res.json({token});
    }

    async loginTest(req,res) {
        console.log(req.headers)
        const authorization = req.headers.authorization.split(' ')[1];
        jwt.verify(authorization, process.env.SECRET_KEY.toString(), (err,decoded) => {
            if(err) return res.status(403).json({error: "Unauthorized"});
            req.ong = decoded;
            return res.status(200).send();
        });
    }
}


export default new SessionController