import React from 'react';
import CalendarSquare from './CalendarSquare';
import Button from 'react-bootstrap/Button';
import './styles/calendar.css';

class Calendar extends React.Component { 

	constructor(){
		super();
		this.state = {currentMonth: '1', events: [{'id': 'abdf34', 'date': '1-1-2022', 'event': 'go to grocery store' }
		, {'id': 'fhgh5a', 'date': '1-1-2022', 'event': 'bake cake for potluck'}]}
	}



     




     handleNextMonth = () => {

      var currentMonth = this.state.currentMonth;
      var currentIntMonth = parseInt(currentMonth);
      if (currentIntMonth == 12){
        currentIntMonth = 1;
      }
      else {
        currentIntMonth = currentIntMonth + 1;
      }

      currentMonth = String(currentIntMonth);
      this.setState({currentMonth: currentMonth});



     }





   handlePrevMonth = () => {

      var currentMonth = this.state.currentMonth;
      var currentIntMonth = parseInt(currentMonth);
      if (currentIntMonth == 1){
        currentIntMonth = 12;
      }
      else {
        currentIntMonth = currentIntMonth - 1;
      }

      currentMonth = String(currentIntMonth);
      this.setState({currentMonth: currentMonth});



     }





      handleAdd = (date, name ) => {
      
        var allEvents = this.state.events.slice();
        const id = (Math.random() + 1).toString(36).substring(7);
        alert(id);
        allEvents.push({"id": id, "date": date, "event": name});
        this.setState({events: allEvents});



      }



     handleChange = (id, text) => {
    
 var allEvents = this.state.events.slice();
         for (var i in allEvents) {
     if (allEvents[i].id == id) {
        allEvents[i].event = text;
        break;

     }
     
   }
        this.setState({events: allEvents});

        

     }



     handleDelete = (id) => {

       var allEvents = this.state.events.slice();

      allEvents = allEvents.filter(task => task.id !==  id);
      this.setState({events: allEvents});
 



     }

	render() { 

   const thirtyDays = ['4', '6', '9', '11'];
       
       return(

       <div><h1>{this.state.currentMonth}</h1>
       <Button onClick={this.handlePrevMonth} className='prev' variant="outline-dark">prev</Button>
      <Button onClick={this.handleNextMonth} className='next' variant="outline-dark">next</Button>
      
      	<div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>


        <CalendarSquare date={this.state.currentMonth.concat('-1', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
       <CalendarSquare date={this.state.currentMonth.concat('-2', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
        <CalendarSquare date={this.state.currentMonth.concat('-3', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
         <CalendarSquare date={this.state.currentMonth.concat('-4', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
          <CalendarSquare date={this.state.currentMonth.concat('-5', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
           <CalendarSquare date={this.state.currentMonth.concat('-6', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />


       	</div>


  <div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>


        <CalendarSquare date={this.state.currentMonth.concat('-7', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
       <CalendarSquare date={this.state.currentMonth.concat('-8', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
        <CalendarSquare date={this.state.currentMonth.concat('-9', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
         <CalendarSquare date={this.state.currentMonth.concat('-10', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
          <CalendarSquare date={this.state.currentMonth.concat('-11', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
           <CalendarSquare date={this.state.currentMonth.concat('-12', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />


        </div>



 <div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>


        <CalendarSquare date={this.state.currentMonth.concat('-13', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
       <CalendarSquare date={this.state.currentMonth.concat('-14', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
        <CalendarSquare date={this.state.currentMonth.concat('-15', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
         <CalendarSquare date={this.state.currentMonth.concat('-16', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
          <CalendarSquare date={this.state.currentMonth.concat('-17', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
           <CalendarSquare date={this.state.currentMonth.concat('-18', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />


        </div>



<div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>


        <CalendarSquare date={this.state.currentMonth.concat('-19', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
       <CalendarSquare date={this.state.currentMonth.concat('-20', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
        <CalendarSquare date={this.state.currentMonth.concat('-21', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
         <CalendarSquare date={this.state.currentMonth.concat('-22', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
          <CalendarSquare date={this.state.currentMonth.concat('-23', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
           <CalendarSquare date={this.state.currentMonth.concat('-24', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />


        </div>


        <div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>


        <CalendarSquare date={this.state.currentMonth.concat('-25', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
       <CalendarSquare date={this.state.currentMonth.concat('-26', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
        <CalendarSquare date={this.state.currentMonth.concat('-27', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
         <CalendarSquare date={this.state.currentMonth.concat('-28', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
        
  

{this.state.currentMonth == '2'?
    <div ></div>
    : [
        thirtyDays.includes(this.state.currentMonth)
            ? <div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>

 <CalendarSquare date={this.state.currentMonth.concat('-29', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
  <CalendarSquare date={this.state.currentMonth.concat('-30', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />


            </div>
            : <div style={{ display: 'flex',
       
    flexDirection: 'row', flexBasis: '100%'}}>

         
 <CalendarSquare date={this.state.currentMonth.concat('-29', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
  <CalendarSquare date={this.state.currentMonth.concat('-30', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />
<div><CalendarSquare date={this.state.currentMonth.concat('-31', '-2022')} events={this.state.events} handleAdd={this.handleAdd} handleChange={this.handleChange} handleDelete = {this.handleDelete} />

</div>
            </div>

    ]
}




        </div>



     

       </div>


      );
	} 

}


export default Calendar;
