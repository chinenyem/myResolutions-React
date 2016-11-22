import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

	addResolution(event) {
		event.preventDefault();
		
		const text_str = this.refs.resolution.value.trim();
		
		Meteor.call('addResolution', text_str, ()=> {
			this.refs.resolution.value = "";
		});
		
	}

	render(){
		return (
			<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
					<div >
    					<input 
    						type="text" 
    						ref="resolution"
    						placeholder="finish react meteor series"/>
  					</div>
			</form>
		)
	}
}
