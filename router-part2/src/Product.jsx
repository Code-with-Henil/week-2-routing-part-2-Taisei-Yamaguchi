import {Link} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'

function Product() {
    return (
        <>
        
        <h1>Product</h1>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        
        <NavigationMenu/>       
        </>
        
    )
}

export default Product