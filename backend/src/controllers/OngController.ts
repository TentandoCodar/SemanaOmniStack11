import { PrismaClient } from '@prisma/client';
import { createSchema } from '../validators/OngsValidator';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

class OngController {
    async store(req,res) {
        let isValid;
        try {
            isValid = await createSchema.validate(req.body);
        }
        catch(err) {
            
            return res.status(400).json(err);
        }
        const {name, email, password, whatsapp, city, uf} = req.body;
        const hashed_password = await bcrypt.hash(password, 12);
        const ong = await prisma.ong.create({
            data: {
                name,
                email,
                password: hashed_password,
                uf,
                city,
                whatsapp,
            }
        })
        return res.json(ong);
    }

    async show(req,res) {
        const {id} = req.ong;
        const {page = 0} = req.params;
        const skiped = parseInt(page);
        const skip = (skiped - 1) * 5
        const ong = await prisma.ong.findOne({
            where: {
                id
            },
            include: {
                incidents: {
                    first: 5,
                    skip: skip,
                    
                }
            }
        })
        const count = ong.incidents.length;
        res.header('X-Total-Count', count);
        return res.json(ong);
    }
}

export default new OngController;