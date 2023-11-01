import {Link} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'

function Contact() {
    return (
        <>
        
        <h1>Contact</h1>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        
        <NavigationMenu/>       
        </>
        
    )
}

export default Contact