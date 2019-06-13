import React from 'react'
import PropTypes from 'prop-types'



// export const Landing = ({headings}) => (


  export default class Landing extends React.Component {

    render(){

      return(

        <div className="margin-top-0 landing landingWrapper">
        <div className="landing__header menu-margin-gap">

        <h1 className='question-parallax landingHeader_1'>

			
          <svg class="filled-heading1">

            <text y="70" fill="#fefefc">.WHAT’S</text>
            <clipPath id="text" class="filled-heading">

                <text y="210">CLINICAL</text>
                <text y="350">SPACE?</text>
            </clipPath>
                
            <g id="background" clip-path="url(#text)">
			
              <path d="M570,370H-26.7V0L570,0V370z"/>
                    
              <path d="M442.5,381.8L442.5,381.8c-114.2,0-206.7-92.5-206.7-206.7v0c0-114.1,92.5-206.7,206.7-206.7h0c114.1,0,206.7,92.5,206.7,206.7v0C649.2,289.2,556.7,381.8,442.5,381.8z"/>
                    
              <path id="sec" d="M442.5,381.8L442.5,381.8c-114.2,0-206.7-92.5-206.7-206.7v0c0-114.1,92.5-206.7,206.7-206.7h0c114.1,0,206.7,92.5,206.7,206.7v0C649.2,289.2,556.7,381.8,442.5,381.8z"/>
                    
              <path id="th" d="M113.3,392.1L113.3,392.1C50.7,392.1,0,341.4,0,278.8v0C0,216.2-34,165.3,72.7,140c0,0,70.7-6.7,153.3,28.7C332,214,335.4,273,335.4,273c-5.7,53.3-82.4,68.7-114.7,85C199.1,368.9,139.4,392.1,113.3,392.1z"/>
                
            </g>

          </svg>
          
        </h1>
          
          <div className="landing__header-wrapper">
            <div>
              <span className="landing__header-goals-title landingGoalHeader_1"> .WE ARE</span>
              <h2 className="landing__header-goals-desc landingGoalDesc_1">The CSPACE lab (Science of Personality, Addiction, and Religion, Throughout Adulthood) at Bowling Green State University is comprised of myself, my current graduate students, and a number of undergraduate students.</h2>
            </div>
            <div className="landing__header-wrapper-side landingGoalDesc_1_side">
              <span>Paid Media, Search Marketing, Social Media, Data & Analytics</span>
              <a>More about us ?</a>
            </div>
          </div>


          <div className="landing__header-wrapper landingGoalDesc_2">

            <span className="landing__header-goals-title2 landingGoalHeader_2"> FOCUSING ON</span>
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


          <span className='landing__header-scroll landingScrollText'>scroll to get to know us</span>

        </div> 

          

      </div>

      )
    }

    componentDidMount(){
      var q = document.querySelector('.question-parallax');
      var scroll = document.querySelector('.landing__header-scroll');
      setTimeout(()=>{
        q.classList.add('move-in-from-left');
        scroll.classList.add('move-in-from-bottom');

      },500)


    }
   
    
  }
  