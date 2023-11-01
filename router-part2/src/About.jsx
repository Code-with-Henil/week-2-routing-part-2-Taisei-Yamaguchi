import {Link} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'

function About() {
    return (
        <>
        
        <h1>About</h1>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        
        <NavigationMenu />
        </>
        
    )
}

export default About