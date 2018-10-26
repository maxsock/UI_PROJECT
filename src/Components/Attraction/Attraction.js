import React from 'react';
import './Attraction.css'
import AttractionCard from '../AttractionCard/AttractionCard.js'
import data from '../../attraction.json'
import { SlideToggle } from 'react-slide-toggle';

export default class Attraction extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          data: [{"id":1,
            "name":"Roller Coaster",
            "price":5,
            "date":"13/05/2004"
            },
            {"id":2,
              "name":"Star Wars Hyperspace",
              "price":4,
              "date":"12/04/2007"
              },
            {"id":3,
              "name":"Phantom Manor",
              "price":4,
              "date":"24/03/2007"
              },
            {"id":4,
              "name":"Indiana Jones",
              "price":4,
              "date":"25/02/2005"
              }],
        };

    }
  render() {
    return (
    <div class="container">
    {this.state.data.name}
        <div>
        <SlideToggle collapsed >
          {({onToggle, setCollapsibleElement}) => (
            <div className="my-collapsible">
            <div class="row justify-content-md-center">
              <button type="button" class="btn btn-lg btn-block" id="addElement" onClick={onToggle}> Ajouter une attraction </button>
            </div>
      <div className="my-collapsible__content" ref={setCollapsibleElement}>
        <div className="my-collapsible__content-inner">
        <form>

        <div class="form-group">
        <label for="nomdelattraction">Nom de l'attraction</label>
        <input type="text" class="form-control" id="nomdelattraction" name="nomdelattraction" placeholder="Le Grand Huit"/>
        </div>

        <div class="form-row">
        <div class="form-group col-md-6">
        <label for="datedelinstallation">Date de l'installation</label>
        <input type="date" class="form-control" id="datedelinstallation" placeholder="Email"/>
        </div>

        <div class="form-group col-md-6">
        <label for="inputPassword4">Prix</label>
        <div class="input-group input-group-default mb-3">

        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">€</span>
        </div>
        <input type="number" class="form-control" id="inputPassword4" placeholder="0"/>
        </div>

        </div>
        </div>

        <button type="submit" class="btn btn-md btn-block" id="addNewElement" onClick={onToggle}> Ajouter </button>
        </form>
          </div>
      </div>
    </div>
  )}
</SlideToggle>

            </div>
            <div class="row  justify-content-around">
              <DisplayCards/>
            </div>
          </div>

    );
    function DisplayCards(){
      var cards = []
      data.map(function(attraction){
        cards.push(<div class="col col-lg-5">
          <AttractionCard class="card" name={attraction.name} price={attraction.price} date={attraction.date} />
        </div>)
          })

      return cards;
    }

  }


}
