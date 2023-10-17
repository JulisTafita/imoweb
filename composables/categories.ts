export const getCategories = () => {
    const query = gql`
        query{
              getCategories{
                createdAt
                updatedAt
                deletedAt
                id
                name
                description
                number
                __typename
              }

        }`

    const {result: categories} = useQuery(query)

    return categories
}