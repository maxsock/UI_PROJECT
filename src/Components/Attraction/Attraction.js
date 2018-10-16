import React from 'react';
import './Attraction.css'
import AttractionCard from '../AttractionCard/AttractionCard.js'

export default class Attraction extends React.Component {
  render() {
    return (
          <div class="container">
            <div class="row justify-content-md-center">
            <button type="button" class="btn btn-lg btn-block" id="addElement" > Ajouter une attraction </button>
            </div>
            <div class="row  justify-content-around">
              <DisplayCards/>
            </div>
          </div>

    );
    function DisplayCards(){
      var cards = []
      for(var i = 0; i < 6; i++) {
        cards.push(<div class="col col-lg-5">
          <AttractionCard class="card"/>
        </div>)

      }
      return cards;

    }
  }


}
