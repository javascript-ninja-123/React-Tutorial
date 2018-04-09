import React,{Component} from 'react';
import './loader.css';


class Loader extends Component {
    renderLoader = () => {
      if(this.props.renderReason){
        return 'loader'
      }
      else{
        return (
          [this.props.children]
        )
      }
    }

    render() {
        return (
          <div className='Loader'>
          {this.renderLoader()}
          </div>
        );
    }
}

export default Loader;
