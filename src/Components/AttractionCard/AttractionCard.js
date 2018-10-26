import React from 'react';
import './AttractionCard.css'

export default class AttractionCard extends React.Component {
  render() {
    return (
        <div id="card" class="container">
          <div class="row title">
            <div class="col col-lg-9">
            <h3> {this.props.name} </h3>
            </div>
            <div class="col col-lg-1 icon ">
             <i class="material-icons edit" data-toggle="tooltip" data-placement="top" title="Modifier">create</i>
             </div>
             <div class="col col-lg-1 icon">
              <i class="material-icons clear" data-toggle="tooltip" data-placement="top" title="Supprimer">clear</i>
              </div>
             </div>
              <div class="row ">
               <div class="col col-lg-7">
                  Date dinstallation:
               </div>
               <div class="col col-lg-4">
                  Prix:
               </div>
            </div>
            <div class="row ">
              <div class="col col-lg-7 info">
                 {this.props.date}
              </div>
              <div class="col col-lg-4 info">
                 {this.props.price}€
              </div>
          </div>
        </div>
    );
  }
}
