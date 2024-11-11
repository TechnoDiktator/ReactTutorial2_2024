import { useState } from "react"

export function useInput(defaultValue){
    const [enteredValue , setEnteredValues] = useState(defaultValue)
    const [didEdit , setDidEdit] = useState(false)


    function handleInputBlur(event) {
        setDidEdit( (prev) => ({
            ...prev,
            [identifier] :true
        }));
    }

    function handleInputChange(event){
        setEnteredValues(prevValues => {
        return {
            ...prevValues,
            [identifier]:value
        }
        })

    }


}