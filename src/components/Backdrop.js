import ReactDOM from 'react-dom'
import styles from './Backdrop.module.css'
import {usePortal} from '../hooks/use-portal'
export default function Backdrop(props){

    const rootContainer = usePortal("backdrop",props.isMounted,false)

    // const [rootContainer,containerRef] = usePortal("backdrop")

    return rootContainer?ReactDOM.createPortal(<div onClick={props.onClick} className={styles['backdrop']}/>,rootContainer)
    :null
}