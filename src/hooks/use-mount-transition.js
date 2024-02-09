import {useEffect, useState} from 'react'
export default function useTransitionOnMount(hasMounted,unmountDelay){
      
  const [hasTransitionedIn,setTransition] = useState(false)
      
  useEffect(()=>{
    let timeout 
    // console.log("Use effect triggered") 
    if(hasMounted && !hasTransitionedIn){
      setTransition(true)
    }
    else if(!hasMounted && hasTransitionedIn){
      timeout = setTimeout(()=>{
        // console.log("Triggered after:"+unmountDelay+"seconds")
        setTransition(false)
      },unmountDelay)
    }

    return ()=>clearTimeout(timeout)

  },[hasTransitionedIn,hasMounted,unmountDelay])
  return hasTransitionedIn
}
