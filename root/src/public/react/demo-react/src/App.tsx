import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
//import Sidebar from './components/Sidebar';
//import ShowsColumn from './components/ShowsColumn';
import TheShows from './components/shows';
import Cell from './components/Cell';
import ChannelImage from './components/ChannelImage';
import getData , {Items,Item,Show} from './components/getData';
//import Items from './components/getData';
import { Grid,Container,Row,Col } from 'reactstrap';

//function DayChange(day){  var items=getData(day); }
// type AppState = {day: number,
//      loading: boolean}
// type Props = {}
export function DayChange(myDay){ 
     var result=getData(myDay);
     return result
}

class App extends Component <{}, {day: number, loading: boolean,items: Item[]}>{
    constructor(props) {
        super(props)
        this.state = {
            day: 1,
            loading: false,
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
       //this.setState({loading: true, items: DayChange(this.state.day)});
       this.handleChange(this.state.day);
    }
    
    
    handleChange(value){
       this.setState({day:value, loading:true, items: getData(value)});
    }
    /*
    componentWillReceiveProps(props) {
        this.setState
    }
    */
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
    //alert(`Today: ${this.state.day}`);
    
    //var items = DayChange(this.state.day);
    //var items = getData(this.state.day);
        
    return (
    
    <div className="App" >
        <Container className="container-fluid">
             <Row className="row flex-row flex-nowrap">
                 {  this.state.items.map( ({shows,channelImage}) => 
              
              <Fragment key={shows[0].channelID+'COL'} >
              <Col className="col-xs-12">
                <ChannelImage key={shows[0].channelID+'CIMG'} channelImage={channelImage} />
                <TheShows key={shows[0]._id+shows[0].channelID+'S'} handleChange={this.handleChange} shows={shows} />
              </Col>
              </Fragment>
            
            /*  <ShowsColumn key={shows[0].channelID}{...item} /> */
              
              )  
            } 
              </Row>
        </Container>
    </div>);
    this.setState({loading: false});
    }
    
}

export default App;
