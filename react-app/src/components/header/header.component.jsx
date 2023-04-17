import React from 'react';
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/icons/crown.svg';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
const Header = ({currentUser,hidden}) => {
  // console.log("currentUser in header",currentUser);
  return (

    <div className = "header">
         <Link to = "/">
           <Logo className = "logo" />
         </Link>
         <div className = "options">
           <Link className = "option" to = "/shop">Shop</Link>
           <Link className = "option" to = "/contact">Contact</Link>
           {
             currentUser? 
             <div className = "option sign-out-btn" onClick = {()=>auth.signOut()}>SIGN OUT</div>
             :
           <Link className = "option" to = "/signin">Sign In</Link>
           }

           <CartIcon   />
  
         </div>

        { 
        hidden? null:<CartDropDown />
        }
    </div>
  )

 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);