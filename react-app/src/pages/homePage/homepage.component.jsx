import React from 'react';
import MenuDirectory from '../../components/menu-directory/menu-directory.component';

const HomePage = (props) => {
  // console.log("homePage-props",props);
  return  (
  
    <div className="homepage">
        {/* <NavBar /> */}
      <MenuDirectory />
    </div>


)
}

export default HomePage;