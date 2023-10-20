import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler( async (event) => {

    const body  = await readBody(event);
    let message = null;
    
    await prisma.message.create({
        data: {
            phone: body.phone,
            first_name:  body.firstName,
            email:  body.email,
            message: body.message,
            name: body.name,
        }
    }).then((response) => {
        message = response
    })
    
    
    return message
    
})