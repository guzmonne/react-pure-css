import React, {PropTypes as T} from 'react'
import MainHeader from './common/main/header.js'
import {Grid, Unit} from 'components/grids/'
import {InlineForm, AlignedForm, StackedForm} from 'components/forms/'
import {Button, Anchor} from 'components/buttons/'

const form = (
	<fieldset>
		<legend>A compact inline form</legend>

	  <input type="email" placeholder="Email" />
	  <input type="password" placeholder="Password" />

	  <label htmlFor="remember">
	      <input id="remember" type="checkbox" /> Remember me
	  </label>

	  <Button>A Pure Button</Button>
	  <Anchor>A Pure Anchor</Anchor>
	</fieldset>
)

const alignedForm = (
	<fieldset>
	  <div className="pure-control-group">
	      <label htmlFor="name">Username</label>
	      <input id="name" type="text" placeholder="Username" />
	  </div>

	  <div className="pure-control-group">
	      <label htmlFor="password">Password</label>
	      <input id="password" type="password" placeholder="Password" />
	  </div>

	  <div className="pure-control-group">
	      <label htmlFor="email">Email Address</label>
	      <input id="email" type="email" placeholder="Email Address" />
	  </div>

	  <div className="pure-control-group">
	      <label htmlFor="foo">Supercalifragilistic Label</label>
	      <input id="foo" type="text" placeholder="Enter something here..." />
	  </div>

	  <div className="pure-controls">
	      <label htmlFor="cb" className="pure-checkbox">
	          <input id="cb" type="checkbox" /> I've read the terms and conditions
	      </label>

	      <button type="submit" className="pure-button pure-button-primary">Submit</button>
	  </div>
	</fieldset>
)

class MainApp extends React.Component {
	constructor(){
		super()
	}

	render(){
		return (
			<Grid width="960px" margin="0 auto">
				<Unit pad nr="1">
					<InlineForm>{form}</InlineForm>
				</Unit>
				<Unit pad sm="1-2">
					Unit 1-3
				</Unit>
				<Unit pad sm="1-2">
					Unit 1-3
					<StackedForm>{form}</StackedForm>
				</Unit>
				<Unit pad sm="1-2">
					Unit 1-3
					<AlignedForm>{alignedForm}</AlignedForm>
				</Unit>
			</Grid>
		)
	}
}

MainApp.propTypes = {/* propTypes goes here */}
MainApp.defaultProps = {/* defaultProps goes here */}

export default MainApp
