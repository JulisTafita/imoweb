import {PrismaClient}  from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler( async (event) => {
    
    const sero = await prisma.sero.create({
        data: {
            name: "Julis TAFITA"
        }
    })
    
    
    return {
        data : "sero gets"
    }
})