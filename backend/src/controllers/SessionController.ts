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
}


export default new SessionController