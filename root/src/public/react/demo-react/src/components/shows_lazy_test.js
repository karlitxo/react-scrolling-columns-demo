import React, {Suspense} from 'react';
//import Cell from './Cell';


function arrFromObj(props){
    let arr = [];
// eslint-disable-next-line
    Object.keys(props).map(function (s) { arr.push(props[s]) });
    return arr;
} 


const LazyCells = React.lazy(() => import('./Cell')); 
                        

function TheShows(props){ 
    React.lazy(() => import('./Cell'));
     
    return <Suspense fallback={ <div>'loading'</div> }>
                                <div className="cellsinCol">
                                { arrFromObj(props).map( show => < LazyCells key={`${show._id}CELL`} {...show} /> ) }
                                </div>
                                </Suspense>
}
                        
export default TheShows;

  

  
 