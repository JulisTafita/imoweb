export default defineEventHandler(async (event) => {
    const query = gql`
        query getProducts{
            getProducts{
                createdAt
                updatedAt
                deletedAt
                id
                title
                price
                category
                __typename
              }
        }
    `


    const { data } = await useQuery(query)

    return {
        products : data
    }
})