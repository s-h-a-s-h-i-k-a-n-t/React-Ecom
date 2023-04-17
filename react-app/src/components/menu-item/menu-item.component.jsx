import React from 'react';
import './menu-item.component.scss';
import {withRouter} from 'react-router-dom'

const MenuItems = ({title,imageUrl,size,history,linkUrl,match}) => {

    // console.log("history",history);
    // console.log("others",match,linkUrl);
    return (
        <div style = {{
            backgroundImage : `url(${imageUrl})`
        }} className={`${size} menu-item`}
        onClick = {()=> {history.push(`${match.url}${linkUrl}`)
              console.log("onclick",history,match);
    }}
        >
          
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
}


export default withRouter(MenuItems);