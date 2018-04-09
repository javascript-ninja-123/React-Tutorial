import React,{Component} from 'react';
import { List } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './SideBar.css';

//later
// <List.Item as='li' value='*'>
//   Job Hunting
//   <List.Item as='ol'>
//       <List.Item as='li' value='-'><Link to='/portfolio'>Build a portfolio</Link></List.Item>
//       <List.Item as='li' value='-'><Link to='/react-portfolio'>Build a portfolio with React js</Link></List.Item>
//         <List.Item as='li' value='-'><Link to='/download-portfolio'>Download a portfolio theme</Link></List.Item>
//       <List.Item as='li' value='-'><Link to='/linkedin'>Set up LinkedIn(Find me)</Link></List.Item>
//       <List.Item as='li' value='-'><Link to='/resume'>Create a resume</Link></List.Item>
//       <List.Item as='li' value='-'><Link to='/finish'>What is next? </Link></List.Item>
//   </List.Item>
// </List.Item>


class SideBar extends Component {

    render() {
        return (
            <div className="SideBar">
            <List as='ol'>
              <List.Item as='li' value='*'>
                Set Up
                <List.Item as='ol'>
                  <List.Item as='li' value='-'><Link to='/atom'>Atom editor</Link></List.Item>
                  <List.Item as='li' value='-'><Link to='/github'>Github</Link></List.Item>
                </List.Item>
              </List.Item>
              <List.Item as='li' value='*'>
                HTML
                <List.Item as='ol'>
                  <List.Item as='li' value='-'><Link to='/html'>HTML crash course</Link></List.Item>
                  <List.Item as='li' value='-'><Link to='/semantic-html'>Semantic HTML</Link></List.Item>
                  <List.Item as='li' value='-'><Link to='/html-video'>HTML video player</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/html-form'>HTML from</Link></List.Item>
                </List.Item>
              </List.Item>
              <List.Item as='li' value='*'>
                CSS
                <List.Item as='ol'>
                    <List.Item as='li' value='-'><Link to='/css'>CSS crash course</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/css-flexbox'>CSS Flexbox</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/css-grid'>CSS Grid</Link></List.Item>
                </List.Item>
              </List.Item>
              <List.Item as='li' value='*'>
                HTML/CSS Project
                <List.Item as='ol'>
                    <List.Item as='li' value='-'><Link to='/project1'>Project 1</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/project2'>Project 2</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/project3'>Project 3</Link></List.Item>
                </List.Item>
              </List.Item>
              <List.Item as='li' value='*'>
                Javascript
                <List.Item as='ol'>
                    <List.Item as='li' value='-'><Link to='/javascript'>JS crash course</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/es6'>ES 6 basic(New JS)</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/higher-order-component'>Map && Filter && Reduce</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/promise'>JS Promise</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/fetch'>Fetch API</Link></List.Item>
                </List.Item>
              </List.Item>
              <List.Item as='li' value='*'>
                HTML/CSS/JS Project
                <List.Item as='ol'>
                    <List.Item as='li' value='-'><Link to='/full-project1'>Proejct 1</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/full-project2'>Project 2</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/full-project3'>Project 3</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/full-project4'>Project 4</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/full-project5'>Project 5</Link></List.Item>
                </List.Item>
              </List.Item>
              <List.Item as='li' value='*'>
                Library
                <List.Item as='ol'>
                    <List.Item as='li' value='-'><Link to='/boostrap'>Bootstrap 4(CSS framework)</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/underscore'>Underscore js(Util js)</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/chart'>Chart js</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/animate'>Animate css</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/indexeddb'>IndexedDB</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/google-maps'>Google Maps API</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/vuejs'>Vue js(JS framework)</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/reactjs'>React js(JS framework)</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/redux'>React && Redux</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/react-firebase'>React && Firebase</Link></List.Item>
                    <List.Item as='li' value='-'><Link to='/vue-firebase'>Vue && Firebase</Link></List.Item>
                          <List.Item as='li' value='-'><Link to='/rxjs'>RX JS</Link></List.Item>
                </List.Item>
              </List.Item>
              </List>
            </div>
        );
    }
}

export default SideBar;
