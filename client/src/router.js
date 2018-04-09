import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import APP from './components/App';
import Render from './components/HOC/renderVideo';

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/rxjs' component={Render(APP)('https://www.youtube.com/embed/ei7FsoXKPl0')}/>
          <Route path='/vue-firebase' component={Render(APP)('https://www.youtube.com/embed/we4zuQIXmnw')}/>
          <Route path='/react-firebase' component={Render(APP)('https://www.youtube.com/embed/-RtJroTMDf4')}/>
          <Route path='/redux' component={Render(APP)('https://www.youtube.com/embed/93p3LxR9xfM')}/>
          <Route path='/reactjs' component={Render(APP)('https://www.youtube.com/embed/A71aqufiNtQ')}/>
          <Route path='/vuejs' component={Render(APP)('https://www.youtube.com/embed/z6hQqgvGI4Y')}/>
          <Route path='/google-maps' component={Render(APP)('https://www.youtube.com/embed/Zxf1mnP5zcw')}/>
          <Route path='/indexeddb' component={Render(APP)('https://www.youtube.com/embed/p597PZEsHqI')}/>
          <Route path='/animate' component={Render(APP)('https://www.youtube.com/embed/S2KCXKAView')}/>
          <Route path='/chart' component={Render(APP)('https://www.youtube.com/embed/sE08f4iuOhA')}/>
          <Route path='/underscore' component={Render(APP)('https://www.youtube.com/embed/8L2Du2O3Zho')}/>
          <Route path='/boostrap' component={Render(APP)('https://www.youtube.com/embed/5GcQtLDGXy8')}/>
          <Route path='/full-project5' component={Render(APP)('https://www.youtube.com/embed/6_gLU_OStK0')}/>
          <Route path='/full-project4' component={Render(APP)('https://www.youtube.com/embed/DIVfDZZeGxM')}/>
          <Route path='/full-project3' component={Render(APP)('https://www.youtube.com/embed/K3GfUH7AZKs')}/>
          <Route path='/full-project2' component={Render(APP)('https://www.youtube.com/embed/2wCpkOk2uCg')}/>
          <Route path='/full-project1' component={Render(APP)('https://www.youtube.com/embed/tUE2Nic21BA')}/>
          <Route path='/fetch' component={Render(APP)('https://www.youtube.com/embed/Oive66jrwBs')}/>
          <Route path='/promise' component={Render(APP)('https://www.youtube.com/embed/s6SH72uAn3Q')}/>
          <Route path='/higher-order-component' component={Render(APP)('https://www.youtube.com/embed/rRgD1yVwIvE')}/>
          <Route path='/es6' component={Render(APP)('https://www.youtube.com/embed/IEf1KAcK6A8')}/>
          <Route path='/javascript' component={Render(APP)('https://www.youtube.com/embed/vEROU2XtPR8')}/>
          <Route path='/project3' component={Render(APP)('https://www.youtube.com/embed/Wm6CUkswsNw')}/>
          <Route path='/project2' component={Render(APP)('https://www.youtube.com/embed/M3qBpPw77qo')}/>
          <Route path='/project1' component={Render(APP)('https://www.youtube.com/embed/Xy3GlrddZFI')}/>
          <Route path='/css-grid' component={Render(APP)('https://www.youtube.com/embed/jV8B24rSN5o')}/>
          <Route path='/css-flexbox' component={Render(APP)('https://www.youtube.com/embed/JJSoEo8JSnc')}/>
          <Route path='/css' component={Render(APP)('https://www.youtube.com/embed/yfoY53QXEnI')}/>
          <Route path='/html-form' component={Render(APP)('https://www.youtube.com/embed/bFJ5yr5ap14')}/>
          <Route path='/html-video' component={Render(APP)('https://www.youtube.com/embed/_nN8Si5LKyY')}/>
          <Route path='/semantic-html' component={Render(APP)('https://www.youtube.com/embed/-dQ2Big9ueg')}/>
          <Route path='/html' component={Render(APP)('https://www.youtube.com/embed/UB1O30fR-EE')}/>
          <Route path='/github' component={Render(APP)('https://www.youtube.com/embed/1MVQYSlgXrI')}/>
          <Route path='/atom' component={Render(APP)('https://www.youtube.com/embed/aiXNKHKWlmY')}/>
          <Route path='/' component={Render(APP)('https://www.youtube.com/embed/aiXNKHKWlmY')}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
