import {useEffect, useState} from 'react'

// export const usePortal = (id) => {
//     const containerRef = useRef()
//     const element = document.getElementById(id)
    
//     const parentElement = document.querySelector("#__next")
//     let rootContainer
//     if(element){
//         rootContainer = element
//     }
//     else{
//         rootContainer = document.createElement("div")
//         rootContainer.setAttribute("id",id)
//     }

//     parentElement?.insertAdjacentElement("afterend",rootContainer)
//     containerRef = rootContainer

//     return [rootContainer,containerRef]
// }


export const usePortal = (id,isMounted,isTransitioned) => {
    // var containerRef = useRef()
    
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

        
        
        // console.log("use effect called")
    },[])


    if(rootContainer&&isMounted&&!isTransitioned){
        const parentElement = document.querySelector("#__next")
        parentElement?.insertAdjacentElement("afterend",rootContainer)
        // containerRef = rootContainer
        
        return rootContainer
    }


    // containerRef = rootContainer
    // console.log(rootContainer)

    return rootContainer
    
    // console.log(containerRef)
    
    
}