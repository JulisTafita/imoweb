export default defineEventHandler(async (event) => {
    
    const {id} = getQuery(event)
    
    return {
        product : {
            id: id,
            title: "The Coldest Sunset",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores e perferendis eaque, exercitationem praesentium nihi.",
            price: 2800,
            category: 0
        }
    }
})