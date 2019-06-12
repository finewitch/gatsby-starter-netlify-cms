import React from 'react'
import PropTypes from 'prop-types'

import actionPoint from "../../img/landing/action-point-small.png";

import BoxHover from "../molecules/BoxHover";

export default class Goals extends React.Component {
    render(){
        return(
            <div className="margin-top-0 goals">
        <div className="columns column-top">
            <div className="columns__row main">
                <span className="columns__row-title color-grey landing-header-goals"> Who are we ?</span>
                <h2 className="color-white">The CSPACE lab (Science of Personality, Addiction, and Religion, Throughout Adulthood) at Bowling Green State University is comprised of myself, my current graduate students, and a number of undergraduate students.</h2>
                
            </div>
            <div className="columns__row side">
                <h3 className="columns__row-side color-white">Paid Media, Search Marketing, Social Media, Data & Analytics</h3>
                <a className='columns__row-link color-grey line-link'>Get to know us better</a>
            </div>
        </div>

        <div className="columns">
            <div className="parallax-title">What we focus on ?</div>
            
            <div className="columns__row goal-column">
                <span className="columns__row-title color-blue goal-title">INTERNET ADDICTION</span>
                <span>Cooper Perkins brings exceptional engineering skills and experience to solve our partners' most challenging technical problems.</span>
            </div>
            
            <div className="columns__row goal-column">
                <span className="columns__row-title color-blue goal-title">CLINICAL PSYCHOLOGY</span>
                <span>To make this information usable for a runner, we needed to develop a communication system that would wirelessly send real-time data to runners via their smartphone. This feedback mechanism needed to be user-friendly, allowing runners to easily interpret information.</span>
            </div>

            <div className="columns__row goal-column">
                <span className="columns__row-title color-blue goal-title">INTERNET PORNOGRAPHY USE</span>
                <span>Cooper Perkins brings exceptional engineering skills and experience to solve our partners' most challenging technical problems.</span>
            </div>

        </div>  
  </div>
        )}

        componentDidMount(){
            // var q = document.querySelector('.parallax-title');
            // var page = document.querySelector('.landing').clientHeight - 400;
      
            // window.addEventListener('scroll', function(){
            //     var scrolledY = window.pageYOffset;
            //     // console.log(scroll)
            //     if(scrolledY > page){
            //         console.log('in')
            //         q.style.top = -70 - ((scrolledY - page) * 0.09) + 'px';
            //         // q.style.opacity = 1 - (scrolledY * 0.0035);
                    
            //     }else{
            //         // q.style.top = -90 + (scrolledY * 0.09) + 'px';
            //         // q.style.marginTop= +(scrolledY * 0.7) + 'px';
            //         // q.style.opacity = 0 + (scrolledY * 0.0035);

            //     }
                // console.log(page, scrolledY)
      
              
            // })
          }
}
