import React,{Component} from 'react';

export default (BaseComponent) => (link) =>  {
  class RenderVideo extends Component {

      render() {
          return (
            <BaseComponent {...this.props} video={link}/>
          );
      }
  }
  return RenderVideo
}
