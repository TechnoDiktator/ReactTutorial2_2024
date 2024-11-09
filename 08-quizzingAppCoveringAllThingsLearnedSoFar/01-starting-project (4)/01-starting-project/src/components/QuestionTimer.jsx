import { useCallback,useState  , useEffect} from "react"



export default function QuestionTimer({timeout , onTimeout}) {


    const [remainingTime , steRemainingTime] = useState(timeout)
    
    /*
    we have deliberate adeed a dependency array to the 
    because on every question cghnge we want the timer to reexecute
    */
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);
    
        return () => {
          clearTimeout(timer);
        };
      }, [timeout, onTimeout]);


    //what and how does seEffect wor 
    //it basically orevents react from recreating the function 
    //that is registered inside useeffect
    
    //It refereshes the functions
    //that is creates a new reference 
    //only when something in its deoendency is updated
    
    //thus it prevents from infinite loops 
    //which can aform if useinterval is r
    //refreshed everytime the componenet rerenders
    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            steRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    
        return () => {
          clearInterval(interval);
        };
    }, []);
    
    return <progress id="question-time" max={timeout} value={remainingTime} />;
}




