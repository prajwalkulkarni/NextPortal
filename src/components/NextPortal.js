import React,{ useEffect } from 'react'
import Backdrop from './Backdrop'
import ReactDOM from 'react-dom'
import styles from './NextPortal.module.css'
import useTransitionOnMount from '../hooks/use-mount-transition'
import { usePortal } from '../hooks/use-portal'

// window.React = React
var baseClassName
export default function NextPortal(props){
    
    const {show:isMounted,delay} = props

    

    useEffect(()=>{
        baseClassName = getClassName(props)

    },[])
    
    try{
        if(isMounted === undefined){
            throw new Error('show prop accepts a boolean value, and cannot be undefined.')
        }
    }
    catch(err){
        console.error(err.message)
    }
    
    const isTransitioned = useTransitionOnMount(isMounted, delay||1000)
    const rootContainer = usePortal("overlay",isMounted,isTransitioned)
    
    // console.log(rootContainer)
    return rootContainer ? ReactDOM.createPortal(
        <React.Fragment>
            {isMounted && <Backdrop isMounted={isMounted} onClick={props.onClick} />}
            {(isMounted || isTransitioned) &&
                (<div className={[styles[baseClassName], styles[`${isTransitioned&&'in'}`], styles[`${isMounted && 'visible'}`]].join(' ')}>
                    {props.children}
                </div>)
            }
        </React.Fragment>, rootContainer)
        : null

}


function getClassName(propVal){

    let style=''

    if(propVal.easeIn){
        style = 'overlay-ease-in'
    }
    else if(propVal.easeOut){
        style = 'overlay-ease-out'
    }
    else if(propVal.easeInOut){
        style = 'overlay-ease-in-out'
    }
    else{
        style = 'overlay'
    }

    return style

}