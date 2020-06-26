import React, { Component } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';

import Home from '../pages/home/Home';
import Message from '../pages/Message';
import Movie from '../pages/movie/Movie';
import App from '../App';
import Nav from '../components/nav';


export class Routes extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/" render={props => (
            <App>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/movie" component={Movie}/>
                <Route path="/messgae/:id" component={Message}/>
                {/*路由不正确时，默认跳回home页面*/}
                <Route render={() => <Redirect to="/"></Redirect>} />
              </Switch>
            </App>
          )}>

          </Route>
        </Switch>
      </div>
    )
  }
}

export default Routes
