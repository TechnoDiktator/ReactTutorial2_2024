

export async function fetchAvailablePlaces(){
    const response = await fetch('http://localhost:3000/places');
    const resData =  await response.json()
    if(!response.ok){
        throw new Error("Failed to fecth data")
    }

    return resData.places
        
} 

export async function updateUserPlaces(places){



    const response = await fetch('http://localhost:3000/user-places' , {
        method:'PUT',
        body:JSON.stringify({places:places}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(!response.ok){
        throw new Error('Faoled to update userdata in DB')
    }
    const resData = await response.json()

    return resData.message

}


export async function fetchUserPlaces(){
    const response = await fetch('http://localhost:3000/user-places');
    const resData =  await response.json()
    if(!response.ok){
        throw new Error("Failed to fecth previously selected data")
    }

    return resData.places
        
} 





























