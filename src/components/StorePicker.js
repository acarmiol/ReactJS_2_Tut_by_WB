import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component{
// constructor(){
// 	super();
// 	this.goToStore = this.goToStore.bind(this);

// }
goToStore(){
	event.preventDefault();
	//console.log("*****is it working******");
	//console.log(this.storeInput.value)
	//Grab text from the box
	const storeId = this.storeInput.value;
	//transition to /to /store/:storeId
	this.context.router.transitionTo(`/store/${storeId}`);
}
	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{/*This is a comment in JSX.  It must be within the parent tag*/}
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} 
				ref={(input)=>{this.storeInput = input}}	
				/>
				<button type="submit" >Visit Store ➡</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}
export default StorePicker
