export default defineEventHandler(async (event) => {
    
    const {id} = getQuery(event)
    
    return {
        product : {
            id: id,
            title: "The Coldest Sunset",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores e perferendis eaque, exercitationem praesentium nihi.",
            price: 2800,
            category: 0,
            forSale: false,
            forRent: false,
            NbPiece: 2,
            NbRoom: 3,
            TotArea: 20,
            TotLivableArea: 10,
            IsNew: false,
            builtOn: '2022-10-20 00:00:00',
            CoPropertyNbOfLots: 2,
            CoPropertyCost: 2804,
            AnnexParking: false,
            AnnexCave: false,
        }
    }
})