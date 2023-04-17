import React from 'react';
import MenuItems from '../menu-item/menu-item.component';
import './menu-directory.component.scss'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';
const  MenuDirectory = ({sections}) => {

      return(
        <div className="directory-menu">
         {sections.map(({id,...otherSectionProp})=>(
                 <MenuItems key={id} {...otherSectionProp} />)
         )}

        </div>
      )
}

       
    
const mapStateToProps = (state) => createStructuredSelector({
    sections : selectDirectorySections
})

export default  connect(mapStateToProps) (MenuDirectory);