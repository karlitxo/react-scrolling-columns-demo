import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
//import Sidebar from './components/Sidebar';
//import ShowsColumn from './components/ShowsColumn';
import TheShows from './components/shows';
import Cell from './components/Cell';
import ChannelImage from './components/ChannelImage';
import getData , {Item,Items,Show} from './components/getData';

import { Grid,Container,Row,Col } from 'reactstrap';
//function DayChange(day){  var items=getData(day); }
class App extends Component {
  

    
  render() {
    /* CORS bug, to fix
    async function callExpress()  {
      try {
        let response = await fetch('/api/say-hello/carlos')
                              .then(res => res.json());

        alert('Hi this is a response from the backend: ' + response.response);

      } catch (err) {
        alert(err);
      }
    }
    
    callExpress();
    
  */

    var day = 1;
    var items  = [];
  
    function DayChange(day){ items=getData(day); }
    
    DayChange(day);

    return (
    <div className="App" >
        <Container className="container-fluid">
              <Row className="row flex-row flex-nowrap">
              {  items.map( ({item,shows,channelImage}) => 
              
              <Fragment key={shows[0].channelID+'COL'} ><Col className="col-xs-12">
                <ChannelImage key={shows[0].channelID+'CIMG'} channelImage={channelImage} />
                <TheShows key={shows[0]._id+shows[0].channelID+'S'} {...shows} />
              </Col></Fragment>
            
            /*  <ShowsColumn key={shows[0].channelID}{...item} /> */
              
              )  
            } 
              </Row>
        </Container>
    </div>);
    }
    
}

export function DayChange(day){ var items=getData(day);
                                         return}
export default App;
