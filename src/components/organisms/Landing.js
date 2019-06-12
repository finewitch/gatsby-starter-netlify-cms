import React from 'react'
import PropTypes from 'prop-types'



// export const Landing = ({headings}) => (


  export default class Landing extends React.Component {

    render(){

      return(

        <div className="margin-top-0 landing ">
        <div className="landing__header menu-margin-gap">

        <h1 className='question-parallax'>

			
        <svg class="filled-heading1">
		<text y="70" fill="white">.WHAT’S</text>
    <clipPath id="text" class="filled-heading">

        <text y="210">CLINICAL</text>
        <text y="350">SPACE?</text>
    </clipPath>
        
			<g id="background" clip-path="url(#text)">
			
			<path d="M97.8,341.3H4.3c-20.1,0-36.4-16.3-36.4-36.4V175.2C-32,101.7,27.6,42,101.2,42h29.4c73.6,0,133.2,59.7,133.2,133.2v0
	C263.8,267,189.5,341.3,97.8,341.3z"/>
						
				<path d="M534.8,391H405c-55.2,0-100-44.8-100-100V70.6c0-55.2,44.8-100,100-100h129.8c55.2,0,100,44.8,100,100V291
					C634.8,346.2,590,391,534.8,391z"/>
						
				<path id="sec" d="M442.5,381.8L442.5,381.8c-114.2,0-206.7-92.5-206.7-206.7v0c0-114.1,92.5-206.7,206.7-206.7h0
				c114.1,0,206.7,92.5,206.7,206.7v0C649.2,289.2,556.7,381.8,442.5,381.8z"/>
						
				<path id="th" d="M100,366.1L100,366.1c-55.2,0-100-44.8-100-100v0c0-55.2,44.8-100,100-100h0c55.2,0,100,44.8,100,100v0
					C200,321.3,155.2,366.1,100,366.1z"/>
					
				</g>
		</svg>
          
            {/* .What is 
              <span>Clinical</span>
              <span>Space?</span> */}
          </h1>
          
          <div className="landing__header-wrapper">
            <div>
              <span className="landing__header-goals-title"> .WE ARE</span>
              <h2 className="landing__header-goals-desc">The CSPACE lab (Science of Personality, Addiction, and Religion, Throughout Adulthood) at Bowling Green State University is comprised of myself, my current graduate students, and a number of undergraduate students.</h2>
            </div>
            <div className="landing__header-wrapper-side">
              <span>Paid Media, Search Marketing, Social Media, Data & Analytics</span>
              <a>More about us ?</a>
            </div>
          </div>


          <div className="landing__header-wrapper sc">

            <span className="landing__header-goals-title2"> .FOCUSING ON</span>

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


          <span className='landing__header-scroll'>scroll to get to know us</span>

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
  