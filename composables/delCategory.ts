export const deleteCategory = (id = 0) => {
    const query = gql`
        mutation delCategory($number: Int!){
              delCategory(number: $number)
        }`

    const {result: deleted} = useQuery(query, id)
    

    return deleted
}