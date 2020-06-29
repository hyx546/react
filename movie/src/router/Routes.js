import React, { Component } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';

import Home from '../pages/home/Home';
import Movie from '../pages/movie/Movie';
import App from '../App';

import Bean from '../pages/bean/Bean';
import FM from '../pages/FM/FM';
import Group from '../pages/group/Group';
import Local from '../pages/local/Local';
import Music from '../pages/music/Music';
import Read from '../pages/read/Read';
import Study from '../pages/study/Study';
import Time from '../pages/time/Time';


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
                <Route path="/movie" component={Movie}/>
                <Route path="/bean" component={Bean}/>
                <Route path="/fm" component={FM}/>
                <Route path="/group" component={Group}/>
                <Route path="/local" component={Local}/>
                <Route path="/music" component={Music}/>
                <Route path="/read" component={Read}/>
                <Route path="/study" component={Study}/>
                <Route path="/time" component={Time}/>
                
                {/* <Route path="/messgae/:id" component={Message}/> */}
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
