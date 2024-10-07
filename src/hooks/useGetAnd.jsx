import { useState, useEffect } from "react"

export const useGetAnd = (one, two) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        if ((one.length !== 0) && (two.length !== 0) && (one.length === two.length)) {
            let newValue = ""
            for (let i = 0; i < one.length; i++) {
                if (one[i] === "1" && two[i] === "1") newValue += "1"
                else newValue += "0"
            }
            setValue(newValue)
        } else {
            setValue("")
        }
    }, [one, two])

    return value
}