

                                    //YOU CAN EVEN PASS DEFAULT VALUES TO PROPS
export default function Tabs({buttons , children , buttonsContainer = "menu"}){

    //NOTE THAT FOR US TO BE ABLE TO USE A COMPONENT REFERENCE (
    // whether a normal tag   OR   a react component )
    //IT HAS TO START WITH CAPITAL LETTER

    //REACT COMPONENTS ALWAYS START WITH CAPITAL LETTER
    //IT WILL AUTOMATICALLY RECOGNIZE of you 
    //have passed a normal tag or another components reference
    const ButtonsContainer = buttonsContainer

    return <>

        {/* 
        This is the conventional menu tab
        <menu>
            {buttons}
        </menu> */}

        {/* NOW TO USE THE conventional menu tag but passed via prop  */}
        <ButtonsContainer>{buttons}</ButtonsContainer>

    {children}
    </>


}