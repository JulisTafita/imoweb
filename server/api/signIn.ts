export default defineEventHandler(async (event) => {

    const {email, psw} = getQuery(event)

    return {
        email : email,
        password: psw,
    }
})