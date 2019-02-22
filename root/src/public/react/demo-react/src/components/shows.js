import React from 'react';
import Cell from './Cell';
//import DayChange from "../App";

function arrFromObj(props){
    let arr = [];
// eslint-disable-next-line
    Object.keys(props).map(function (s) { arr.push(props[s]) });
    return arr;
} 

const Shows = props =>  arrFromObj(props).map( show => < Cell key={`${show._id}CELL`} {...show} /> ) 

function TheShows(props){ 
    var day = 1;
    var result = ''
    
    var handleScroll = (e) => {
      const ctop = e.target.scrollTop === 0 ;
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        //console.log(e.target.scrollHeight + '::' + e.target.scrollTop );
        if (bottom && day < 6 ){
            day++;
            result = 'Bottom';
            doAlert(result,day);
            //DayChange(day);
        }
        if (ctop && day > 1 ) {
            day--;
            result = 'Top';
            doAlert(result,day);
            //DayChange(day);
        }
      
        if ((ctop && day===1) || (bottom && day===6)){
          result = 'Edges reached!'; 
          doAlert( result,day );
        }
    }
     
     var doAlert = (result,day) => <script>{alert(`${result}!? Day:${day}`)}</script> ;
     
    return <div className="cellsinCol" onScroll={handleScroll} ><Shows {...props}/></div> ; 
}
                        
export default TheShows;



  

  
 