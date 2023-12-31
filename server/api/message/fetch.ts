import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {

    let messages = null;

    await prisma.message.findMany().then((response) => {
        messages = response
    })
    
    return messages
})