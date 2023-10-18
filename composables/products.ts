export const getProducts = async () => {
    const query = gql`
        query{
            getProducts{
                createdAt
                updatedAt
                deletedAt
                id
                title
                price
                category
                type
                Description
                __typename
            }
        }`

    const {data: products} = await useAsyncQuery(query)

    return products
}