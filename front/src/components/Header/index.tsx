import {Link} from 'react-router-dom'
import './styles.css'
import { Button } from '../Button'

export function Header(){
    return(
        <header>
            <Link to="/"><Button>Dashboard</Button></Link>
            <Link to="/patients"><Button>Patients</Button></Link>
        </header>
    )
}