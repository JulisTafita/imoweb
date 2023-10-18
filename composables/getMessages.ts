export const getMessages =  () => {
    const query = gql`
        query{
          getMessages{
            createdAt
            updatedAt
            deletedAt
            id
            name
            firstName
            email
            phone
            message
          }
        }`

    const {result: messages} = useQuery(query)

    return messages
}

