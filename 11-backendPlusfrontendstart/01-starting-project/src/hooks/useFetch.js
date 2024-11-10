
 
import { useEffect  , useState} from 'react';


//Custom hooks have to start with USE smallcase
export function useFetch (fetchApiFn , initialValue) {
    const [isFetching , setIsFetching] = useState()
    const [error , setError]  = useState()
    const [fetchedData , setFetchedData] = useState(initialValue)
    useEffect(() => {
    
    async function fetchData(){
      setIsFetching(true)
      
      try{
      const data = await fetchApiFn()
      setFetchedData(data)
      }catch (error){
        setError(error.message || "Failed to fetch data")
      }
      setIsFetching(false)
    }
    fetchData()


  } , [fetchApiFn])


  return {
    isFetching:isFetching,
    fetchedData:fetchedData,
    setFetchedData:setFetchedData,
    error:error
  }

}   