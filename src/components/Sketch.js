import imgSource from "../img/landing/moon4.jpg";
import gifSource from "../img/landing/people.mp4";
import landingVid from '../img/landing/2.mp4';
import colors from "../scss/colors.scss";

// import p5Gif from './p5GIF.js';

export default function sketch (p) {

    var start,
    diff,
    ease,
    img1,
    gif1,
    arcCanvas,
    xAxis,
    mainCanvas,
    gifX,
    gifY,
    vid1,
    scrolled;

    const cHeight = 700;
    const cWidth = 700;

    //COLORS
    let arcStroke = colors.arcColor1;
    let bg = colors.bgLanding;

    p.preload = function() {
        img1 = p.loadImage(imgSource);
        vid1 = p.createVideo(landingVid);

        vid1.elt.muted = true
        vid1.autoplay();
        vid1.loop();

        gif1 = p.createVideo(gifSource);
        gif1.elt.muted = true
        gif1.autoplay();
        gif1.loop();
       
        
    }
    
    p.setup = function () {
      

        scrolled = false;
        mainCanvas = p.createCanvas(cHeight, cWidth);
        
        arcCanvas = p.createGraphics(cHeight, cWidth);
        arcCanvas.clear();
        
        
        // yolo.mouseWheel(here);
        
        start = (p.PI / 180);
        diff = 1;
        ease = 1;
        xAxis = -1300;
        gifX = -700;
        gifY =0;
        
        p.frameRate(100);
        p.background(bg);
        
    };
    
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        
        // console.log(props, '<----PROPS')
        // console.log(props.isSecondSection, '<----this')
        if(props.isSecondSection){
            scrolled = props.isSecondSection;
            bg  = colors.bgLandingGoals;
            diff = 1; ease = 1;
            arcStroke = colors.arcColor2;
            
            if(arcCanvas){
                
                arcCanvas.clear();
                
            }
            gifX =700;
            // placeImage(true)
            
        }else{
            scrolled = props.isSecondSection;
            bg  = colors.bgLanding;
            diff =1;
            arcStroke = colors.arcColor1;
            
            if(arcCanvas){
                
                arcCanvas.clear();
                
            }
        }
        
    };
    
    p.draw = function () {
        // p.background(250,250,20);
       
        // xAxis +=0.2;
        xAxis=0;
        // p.image(img1, xAxis, 0);
        placeImage(scrolled);
        p.clear();
        vid1.position(-670,10);
        
        // gif1.parent("yolo");
        makeBgArc(bg);
        
        
        p.image(arcCanvas,0,0);
        makeArc(arcCanvas);

    };
    
    function makeBgArc(){
        p.noFill();
        p.stroke(bg);
        p.strokeWeight(240);
        p.arc(p.width/2, p.height/2,825,825,0 ,0,p.OPEN)

}
    function makeArc(canvas){

        canvas.noFill();
        canvas.stroke(arcStroke);
        canvas.strokeWeight(12.1);

        
        ease = ease + 5.2;
        diff += 5;
        
        // if(diff <= 361){
            
            canvas.arc(p.width /2,    p.height/2,     (cHeight - 30),    (cWidth - 30),     start, (start * diff),     canvas.OPEN);
            canvas.stroke(arcStroke);
            canvas.strokeWeight(1.1);

            // console.log(start * diff)
            canvas.arc(p.width /2,    p.height/2,     (cHeight - 150),    (cWidth - 150),     start, (start * diff),     canvas.OPEN);
            
        // }else{
        //     return
        // }
    
    }

    function placeImage(scrolled){
        if (scrolled === false){
            gif1.position(2050,0);
        }else{
            p.clear();
            gif1.position(-670,0);
        }
    }

    // function mouseWheel(event) {
    //     p.print(event.delta);
    //     console.log(event)
    //     //move the square according to the vertical scroll amount
      
    //     //uncomment to block page scrolling
    //     return false;
    //   }

    //   function here(){
    //       console.log('here')
    //   }
  };