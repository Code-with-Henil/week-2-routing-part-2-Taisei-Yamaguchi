import { NavLink} from 'react-router-dom';

function NavigationMenu(){
    return(
        <nav>
        <ul>
            <li>
            <NavLink exact to="/products" activeClassName="active">
                Products
            </NavLink>
            </li>
            <li>
            <NavLink to="/services" activeClassName="active">
                Services
            </NavLink>
            </li>
            <li>
            <NavLink to="/contacts" activeClassName="active">
                Contact
            </NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default NavigationMenu