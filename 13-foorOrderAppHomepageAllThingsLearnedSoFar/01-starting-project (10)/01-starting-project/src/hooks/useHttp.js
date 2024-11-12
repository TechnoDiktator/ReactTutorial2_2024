import { useEffect, useState , useCallback} from "react"

async function sendHttpRequest(url , config) {

    const response = await fetch(url , config)
    const resData  = await response.json()


    if(!response.ok){
        throw new Error(
            resData.message || 'Something went wrong, Failed to send request'
        )
    }
    return resData
}

export default function useHttp(url , config , initialData) {
    const [data , setData] = useState(initialData)
    const [error , setError] = useState(undefined)
    const [isLoading , setIsLoading]  = useState(false)

    
    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true)
        try{
            const resData  = await sendHttpRequest(url , {...config,
                body:data
            })
            setData(resData)
        }catch (error){
            setError(error.message || "Something went wrong")
        }
        setIsLoading(false)

    } , [url , config])

    useEffect(()=> {
        if(config && (config.method === "GET" || !config || !config.method )){
            //if a simple get request then hot it immediately
            sendRequest()
        }
        
    } , [sendRequest , config])

    return {
        data,
        isLoading,
        error,
        sendRequest
    }

}
