import React, {Fragment} from 'react';
import Cell from './Cell';
import ChannelImage from './ChannelImage';
import { Col } from 'reactstrap';/*
function arrFromObj(props){
    let arr = [];
// eslint-disable-next-line
    Object.keys(props).map(function (s) { arr.push(props[s]) });
    return arr;
} 

const Shows = props =>  arrFromObj(props).map( show => < Cell key={`${show._id}CELL`} {...show} /> ) 
*/
const Shows = (handleChange, shows, channelImage, theDay) =>{ 
    var gday = handleChange.theDay;
    var result = ''
    
    var handleScroll = (e) => {
      const ctop = e.target.scrollTop === 0 ;
        //const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        const bottom = e.target.scrollHeight - e.target.scrollTop > e.target.clientHeight - 1;
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
     
    
    return  <Fragment key={handleChange.shows[0].channelID+'COL'} >
              <Col className="col-xs-12" onScroll={handleScroll} >
                <ChannelImage key={handleChange.shows[0].channelID+'CIMG'} channelImage={handleChange.channelImage} />
                <div className="cellsinCol"  >{ handleChange.shows.map( show => < Cell key={`${show._id}CELL`} {...show} /> ) }</div>
              </Col>
            </Fragment>

}
                        
export default Shows;

