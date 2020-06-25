import React, { Component } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import Home from '../pages/Home';
import Message from '../pages/Message';
import Test from '../pages/Test';
import App from '../App';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={props => (
            <App>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/test" component={Test}/>
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
