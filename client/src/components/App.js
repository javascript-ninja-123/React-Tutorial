import React,{Component} from 'react';
import './App.css';

import SideBar from './SideBar/SideBar';
import Content from './Content/Content'



//Codify Acadmey theme
//http://codifyacademy.com/themes/
//build your portfolio
//https://www.youtube.com/watch?v=xbW8MDZ3NVI
//build a portfolio with react
//https://www.youtube.com/watch?v=QR40RON4S-4&list=PLeQcRHIS0mbiyZ4rrbfu7CSfCTT0t4lSD
//Linkedin tutorial
//https://www.youtube.com/watch?v=L0kW9j-b2xM
//developer resume
//https://www.youtube.com/watch?v=zPff4C68aYY



 class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar/>
                <Content
                video={this.props.video}
                />
            </div>
        );
    }
}

export default App
