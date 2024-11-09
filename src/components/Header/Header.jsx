import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink style={{'marginRight': '20px'}} to='/'>Home</NavLink>
            <NavLink to='/login'>LogIn</NavLink>
        </div>
    );
};

export default Header;