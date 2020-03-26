import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class IncidentsController {
    async store(req,res) {
        const {id} = req.ong;
        const {title, description, value} = req.body;
        const incident = await prisma.incident.create({
            data: {
                title,
                description,
                value,
                ong: {
                    connect: {
                        id
                    }
                }
            }
        })

        return res.json(incident);
    }

    async delete(req,res) {
        const {id} = req.params;
        await prisma.incident.delete({
            where: {
                id: parseInt(id)
            }
        });
        return res.status(204).json({message: "Field deleted"})
    }

    async index(req,res) {
        const incidents = await prisma.incident.findMany({
            include: {
                ong: {
                    select: {
                        password: false,
                        email: true,
                        id: true,
                        name: true,
                        whatsapp: true
                    }
                }
            }
        })

        return res.json(incidents);
    }
}

export default new IncidentsController;