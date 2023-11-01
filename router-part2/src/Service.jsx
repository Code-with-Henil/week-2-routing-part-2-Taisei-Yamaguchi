import {Link} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'

function Service() {
    return (
        <>
        
        <h1>Service</h1>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        
        <NavigationMenu/>       
        </>
        
    )
}

export default Service