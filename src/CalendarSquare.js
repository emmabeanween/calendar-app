import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './styles/calendarsquare.css';


class CalendarSquare extends React.Component {

	constructor(props){
		super(props);
		this.state = {currentEvents:props.events, number: 0, editDialog: false, editText: '', editId: '', button: 'change', addDialog: false};

	}


componentWillReceiveProps(nextProps) {
	const passedinDate = nextProps.date;
   var currentEvents = nextProps.events.slice();
 currentEvents = currentEvents.filter(function(item){
   return item.date == passedinDate;
}).map(function({id, date, event}){
    return {id, date, event};
});

  this.setState({ currentEvents: currentEvents });  
}


componentDidMount(){




const passedinDate = this.props.date;
const number = passedinDate.split("-", 2);
// set state here
this.setState({number: number[1]});
// filter here
var currentEvents = this.state.currentEvents.slice();
 currentEvents = currentEvents.filter(function(item){
   return item.date == passedinDate;
}).map(function({id, date, event}){
    return {id, date, event};
});

this.setState({currentEvents: currentEvents});

}







handleClick = (id) => {


this.setState({editDialog: true})

for (var i = 0; i < this.state.currentEvents.length; i++){
if (this.state.currentEvents[i].id == id){
	this.setState({editText: this.state.currentEvents[i].event});
	this.setState({editId: this.state.currentEvents[i].id});

}
}


}


handleSecondClick = () => {


 this.setState({addDialog: true});


}


handleAdd= (event) => {

const eventName = event.target.text.value;
const eventDate = this.props.date;
this.props.handleAdd(eventDate, eventName);
this.setState({addDialog: false});

}





handleChange = (event) => {



if (this.state.button == "change"){

      this.props.handleChange(this.state.editId, event.target.text.value);
      this.setState({editDialog: false});


}
else {

	// deleting item
	this.props.handleDelete(this.state.editId);
	this.setState({editDialog: false});


}

}



render(){

const cardText = 
           this.state.number + "\n" + "\n";


	return(<div>

       


  <div className="card" style={{ width: '14rem', height: '14rem', marginTop: '60px', marginLeft: '10px'}}>
  <div>
           
           {cardText}




    {this.state.editDialog? <div>


<Form className='form' onSubmit={this.handleChange}>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" name="text" placeholder={this.state.editText} />
  </Form.Group>
  <Button  onClick={() => this.setState({button: 'change'})}  variant="outline-primary" type="submit">
    change event 
  </Button>
  <br/><br/>
  <Button onClick={() => this.setState({button: 'delete'})}  variant="outline-primary" type="submit">
    delete event 
  </Button>
</Form>




    	</div>:<div></div>}  







  {this.state.addDialog? <div>


<Form className='form' onSubmit={this.handleAdd}>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" name="text" placeholder="event name here..." />
  </Form.Group>
  <br/>
  <Button  variant="outline-primary" type="submit">
    add event 
  </Button>
</Form>




    	</div>:<div></div>}  




  {this.state.currentEvents.map(event => <p className='text' onClick={() => this.handleClick(event.id)}
  >{event.event}</p>)}
     

        











           	


   </div>  



<button onClick={this.handleSecondClick} class='button'><img src="https://img.icons8.com/material-outlined/24/000000/add.png"/></button>














</div>











		</div>);
}}

export default CalendarSquare;