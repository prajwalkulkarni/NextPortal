import {useEffect, useState} from 'react'

export const usePortal = (id,isMounted,isTransitioned) => {    
    // let parentElement
    let element
    const [rootContainer,setRootContainer] = useState(null)
    useEffect(()=>{
        element = document.getElementById(id)
    
        if(element){
            setRootContainer(element)        
        }
        else{
            element = document.createElement("div")
            element.setAttribute("id",id)
            setRootContainer(element)
        }
    },[])

    if(rootContainer&&isMounted&&!isTransitioned){
        const parentElement = document.querySelector("#__next")
        parentElement?.insertAdjacentElement("afterend",rootContainer)
        // containerRef = rootContainer
        
        return rootContainer
    }

    return rootContainer
}
