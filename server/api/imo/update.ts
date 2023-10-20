import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    await prisma.imo.update({
        where: {
            id: body.id
        },
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
    })

    return {
        status: 200
    }
})