import React from 'react'
import PropTypes from 'prop-types'
import menuIco from "../../img/menuIco.svg";


export default class Menu extends React.Component {
    constructor(props) {
      super(props);
      // console.log(props)
        this.state = {
         
        };
    }

    render(){
      return(
        <div className="menu">
          
          {/* <span className={`menu-logo ${this.props.logoVisibility ? 'menu-opacity-logo' : '' }`}>Cs</span> */}
          <a className='menu-fixed'>
              <img  src={menuIco} alt="Kaldi"/>
          </a>
          
        </div>
      )
    }
}