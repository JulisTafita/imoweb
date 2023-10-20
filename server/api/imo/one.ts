import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    let product = null;

    await prisma.imo.findUnique({
        where: {
            id: body.id,
        },
    }).then((response) => {
        product = response
    });

    return product;
})