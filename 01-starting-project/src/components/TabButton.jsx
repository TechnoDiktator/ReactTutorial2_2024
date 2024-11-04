

export default function TabButton(props) {
    {/*
    props.children is provided ny default by react itself 
    it represents whatever is present between the component opening and closing 
    when the componenet is calle    
    */}

    console.log("TAB BUTTON EXECUTING")
    return( 
        <li>
        <button onClick={props.onClickProp}>{props.children}</button>
        </li>
    )
}   

//we can also do this 
//children is a special keyword for react
/*
    export default function TabButton({children}) {
   
    
    return <li><button>{children}</button></li>
    }
*/

