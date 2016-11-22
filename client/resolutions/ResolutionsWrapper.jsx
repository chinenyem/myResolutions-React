import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionsSingle from './ResolutionsSingle.jsx';


Resolutions_ = new Mongo.Collection('resolutions');

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

	constructor() {
		super();

		this.state = {
			subscription: {
				resolutions: Meteor.subscribe('userResolutions')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}

	resolutions() {
		return Resolutions_.find().fetch();
	}

	render() {
		
		
		
		return (
			<div>
				<h1> My Resolutions </h1>
				<ResolutionsForm />
				<br/>
				<ul className="resolutions">
					{this.resolutions().map( (resolution)=>{
						return <ResolutionsSingle key={resolution._id} resolution={resolution} />
					})}

					
				</ul>
			</div>
		)
	}

}


