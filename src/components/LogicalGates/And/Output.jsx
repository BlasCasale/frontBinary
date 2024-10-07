import { useGetAnd } from '../../../hooks/useGetAnd'

const Output = ({ one, two }) => {

    const value = useGetAnd(one, two)
    const badResponse = "Las cadenas deben tener la misma longitud para compararse"

    return (
        <p>{value ? value : badResponse}</p>
    )
}

export default Output