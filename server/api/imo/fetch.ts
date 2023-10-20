import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {

    let products = null;

    await prisma.imo.findMany().then((response) => {
        products = response
    })
    
    return products
})