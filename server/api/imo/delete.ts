import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    
    await prisma.imo.deleteMany({
        where: {
            id: body.id,
        },
    })

    return {
        status: 200
    }
})