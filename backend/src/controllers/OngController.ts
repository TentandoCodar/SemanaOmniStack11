import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class OngController {
    async store(req,res) {
        const {email} = req.body;
        return res.json(email);
    }
}

export default new OngController;