import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler( async (event) => {

    const body  = await readBody(event);
    let product = null;
    
    await prisma.imo.create({
        data: {
            title: body.title,
            description: body.description,
            reference: body.reference,
            is_exclusif: body.isExclusif,
            is_new: body.isNew,
            nb_piece: body.nbPiece,
            nb_room: body.nbRoom,
            surface: body.surface,
            price: body.price
        }
    }).then((response) => {
        product = response
    })
    
    
    return product
    
})