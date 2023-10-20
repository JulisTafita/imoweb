import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    let message = null;
    
    await prisma.message.findUnique({
        where: {
            id: body.id,
        },
    }).then((response) => {
        message = response
    })

    return message
})