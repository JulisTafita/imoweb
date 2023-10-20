import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {

    let user = null;

    await prisma.user.findMany().then((response) => {
        user = response
    })

    return user
})