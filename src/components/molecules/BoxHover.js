import React from 'react'
import PropTypes from 'prop-types'
import actionPoint from "../../img/landing/action-point-small.png";
import actionPointActive from "../../img/landing/action-point-small-active.png";

export default class BoxHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: this.props.present,
            name2: this.props.hidden,
            name3: this.props.present,
            pic1: actionPoint,
            pic2: actionPointActive,
            pic3:actionPoint,
        };
    }
    handleHover(){
        console.log('hovered')
        this.setState({
            name3 : this.state.name2,
            pic3: this.state.pic2,
        })
    }
    handleMouseLeave(){
        console.log('hovered')
        this.setState({
            name3 : this.state.name1,
            pic3: this.state.pic1,
        })
    }
    render(){
      return(
        <a className="goals__columns-box" onMouseOver={()=>this.handleHover()} onMouseLeave={()=>this.handleMouseLeave()}>
            <span className="span-present">{this.state.name3}</span>
            <img className="" src={this.state.pic3} alt="Kaldi"/>
        </a>
      )
    }
}