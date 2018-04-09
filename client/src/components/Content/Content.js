import React,{Component} from 'react';
import './Content.css';
import Loader from '../HOC/loader';
class Content extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    render() {
        return (
            <div className="Content">
              <iframe
              width="850" height="515"
              src={this.props.video}
              allowFullScreen
              frameBorder="0"
              >
              </iframe>
            </div>
        );
    }
}

export default Content;
