import React from 'react';
import { Route } from 'react-router-dom'
import Attraction from './Attraction/Attraction.js'
import Batiment from './Batiment/Batiment.js'
import Personnel from './Personnel/Personnel.js'
import Maintenance from './Maintenance/Maintenance.js'
import Stats from './Stats/Stats.js'

export default class Router extends React.Component {
  render() {
    return (
        <div>
          <Route path="/attractions" component={Attraction}/>
          <Route path="/batiments" component={Batiment}/>
          <Route path="/personnel" component={Personnel}/>
          <Route path="/stats" component={Stats}/>
          <Route path="/maintenance" component={Maintenance}/>
        </div>
    );
  }
}
