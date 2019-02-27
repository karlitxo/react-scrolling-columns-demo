import React from 'react';
import Cell from './Cell';
/*
function arrFromObj(props){
    let arr = [];
// eslint-disable-next-line
    Object.keys(props).map(function (s) { arr.push(props[s]) });
    return arr;
} 

const Shows = props =>  arrFromObj(props).map( show => < Cell key={`${show._id}CELL`} {...show} /> ) 
*/
const Shows = (handleChange, shows) =>{ 
    var gday = 1;
    var result = ''
    
    var handleScroll = (e) => {
      const ctop = e.target.scrollTop === 0 ;
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom && gday < 6 ){
            gday++;
            result = 'Bottom';
            //doAlert(result,day);
            handleChange.handleChange(gday);
        }
        if (ctop && gday > 1 ) {
            gday--;
            result = 'Top';
            //doAlert(result,day);
            handleChange.handleChange(gday);
        }
      
        if ((ctop && gday===1) || (bottom && gday===6)){
          result = 'Edges reached!'; 
          doAlert( result,gday );
        }
    }
     
     var doAlert = (result,day) => {alert(`${result}!? Day:${day}`)} ;
     
    return <div className="cellsinCol" onScroll={handleScroll} >{ handleChange.shows.map( show => < Cell key={`${show._id}CELL`} {...show} /> ) }</div> ; 
}
                        
export default Shows;

