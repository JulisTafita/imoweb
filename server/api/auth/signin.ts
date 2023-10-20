import {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {
    
    
    const body = await readBody();
    
    const email = body.email;
    const psw = body.password;
    
    if(email && psw) {
//        await prisma.user.findFirst({
//            where: {
//                email: {
//                    equals: email
//                }
//            }
//        }).then((response) =>{
//           if(response.password == psw){
//               return {
//                   status: 200
//               }
//           }
//        })
        
        return {
            status: 200
        }
    }
        
    return   {
            status: 500,
            error: "Email and Password must be provided"
        }
})