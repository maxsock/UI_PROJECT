import React from 'react';
import '../Attraction/Attraction.css'
import BatimentCard from '../AttractionCard/BatimentCard.js'
import data from '../../batiment.json'
import { SlideToggle } from 'react-slide-toggle';
import ReactNotify from 'react-notify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const uuidv4 = require('uuid/v4');


export default class Attraction extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          attractions: data,
          id:"",
          name:"",
          date:" ",
          modal: false,
          modified:false,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.toggle = this.toggle.bind(this);

      }
      toggle(id,name,date) {
        this.setState({
          modal: !this.state.modal
        });
        let attractions;
        attractions = this.state.attractions

        for(let i = 0; i< attractions.length; ++i)
          if(attractions[i].id == id){
            this.setState({
              id:attractions[i].id,
              name:attractions[i].name,
              date:attractions[i].date
            })
          }

      }

        handleNameChange(event) {
          this.setState({name: event.target.value});
        }


        handleDateChange(event) {
          this.setState({date: event.target.value});
        }

      handleSubmit(e) {
        e.preventDefault();
        let attractions = this.state.attractions;
        let newItem = {
          "name":this.state.name,
          "date":this.state.date};
          attractions.push(newItem)
          this.setState({attractions: attractions});
        this.setState({name:"",date:""});
      this.refs.notificator.success("Succès", "Attraction ajoutée !", 4000);
    }
    deleteItem(id){
      let attractions;
      attractions = this.state.attractions
      for(let i = 0; i< attractions.length; ++i)
        if(attractions[i].id == id){
          attractions[i].deleted = true;
          attractions[i].modified = false;
        }

      this.setState({attractions: attractions});
    }

    componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if(this.state.modified){
          this.toggle();
          this.updateItem();
          this.setState({modified:false})
    }

  }

    updateItem(){
      this.setState({modified:true})
      let attractions;
      attractions = this.state.attractions

      for(let i = 0; i< attractions.length; ++i)
        if(attractions[i].id == this.state.id){
          attractions[i].name = this.state.name;
          attractions[i].date = this.state.date;


        }
      this.setState({attractions: attractions});


    }

    submit = (id,name,date) => {
   confirmAlert({
     message: 'Etes-vous sûr de vouloir supprimer cette attraction ?',
     buttons: [
       {
         label: 'Oui',
         onClick: () => this.deleteItem(id)
       },
       {
         label: 'Non',

       }
     ]
   })
 };


  render() {
    let attractions;
    attractions = this.state.attractions.map(attraction => {

    if(!attraction.deleted){
        return(
          <div class="col col-lg-5">
            <BatimentCard updateItem={this.toggle} deleteItem={this.submit} class="card" id={attraction.id} name={attraction.name}  date={attraction.date} />
          </div>
        )
      }
    })



    return (
    <div class="container">
        <div>
        <SlideToggle collapsed >
          {({onToggle, setCollapsibleElement}) => (
            <div className="my-collapsible">
            <div class="row justify-content-md-center">
              <button type="button" class="btn btn-lg btn-block" id="addElement" onClick={onToggle}> Ajouter un bâtiment </button>
            </div>
      <div className="my-collapsible__content" ref={setCollapsibleElement}>
        <div className="my-collapsible__content-inner">
        <form onSubmit={this.handleSubmit.bind(this)} class="form">

        <div class="form-group">
        <label for="nomdelattraction">Nom de Bâtiment </label>
        <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange} placeholder="Bâtiment 4" />
        </div>

        <div class="form-row">
        <div class="form-group col-md-12">
        <label for="datedelinstallation">Date de l'installation</label>
        <input type="date" class="form-control" value={this.state.date} onChange={this.handleDateChange} />
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
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modifier un bâtiment</ModalHeader>
          <ModalBody>
          <form onSubmit={this.handleSubmit.bind(this)}>

          <div class="form-group">
          <label for="nomdelattraction">Nom du bâtiment</label>
          <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange} placeholder="Bâtiment 4" />
          </div>

          <div class="form-row">
          <div class="form-group col-md-12">
          <label for="datedelinstallation">Date de l'installation</label>
          <input type="date" class="form-control" value={this.state.date} onChange={this.handleDateChange} />
          </div>


          </div>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={this.updateItem}>Modifier</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>

                {attractions}
            </div>
            <ReactNotify ref='notificator'/>
          </div>
    );
  }
}
