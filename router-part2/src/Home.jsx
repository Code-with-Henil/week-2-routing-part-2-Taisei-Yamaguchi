import {Link} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'

function Home() {
    return (
        <>
        
        <h1>Home</h1>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        
        <NavigationMenu/>       
        </>
        
    )
}

export default Home