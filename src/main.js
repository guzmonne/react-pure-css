import React, {PropTypes as T} from 'react'
import MainHeader from './common/main/header.js'
import {Grid, Unit} from 'components/grids/'
import {InlineForm, AlignedForm, StackedForm} from 'components/forms/'
import {Button} from 'components/buttons/'
import {Table} from 'components/tables/'

const thead = (
<thead>
  <tr>
    <th>#</th>
    <th>Make</th>
		<th>Model</th>
		<th>Year</th>
		</tr>
</thead>
)

const tbody = (
	<tbody>
	<tr>
    <td>1</td>
    <td>Honda</td>
    <td>Accord</td>
    <td>2009</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Toyota</td>
    <td>Camry</td>
    <td>2012</td>
  </tr>

  <tr>
    <td>3</td>
    <td>Hyundai</td>
    <td>Elantra</td>
    <td>2010</td>
  </tr>

  <tr>
    <td>4</td>
    <td>Ford</td>
    <td>Focus</td>
    <td>2008</td>
  </tr>

  <tr>
    <td>5</td>
    <td>Nissan</td>
    <td>Sentra</td>
    <td>2011</td>
  </tr>

  <tr>
    <td>6</td>
    <td>BMW</td>
    <td>M3</td>
    <td>2009</td>
  </tr>

  <tr>
      <td>7</td>
      <td>Honda</td>
      <td>Civic</td>
      <td>2010</td>
  </tr>

        <tr>
            <td>8</td>
            <td>Kia</td>
            <td>Soul</td>
            <td>2010</td>
        </tr>
	</tbody>
)

const form = (
	<fieldset>
		<legend>A compact inline form</legend>

	  <input type="email" placeholder="Email" />
	  <input type="password" placeholder="Password" />

	  <label htmlFor="remember">
	      <input id="remember" type="checkbox" /> Remember me
	  </label>

	  <Button>Submit</Button>
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
					<Button success>Success</Button>
					<Button error>Error</Button>
					<Button warning>Warning</Button>
					<Button secondary>Warning</Button>
					<Button>Default</Button>
					<Button xsmall>xsmall</Button>
					<Button small>small</Button>
					<Button large>large</Button>
					<Button xlarge>xlarge</Button>
				</Unit>
				<Unit pad sm="1-2">
					Unit 1-3
					<StackedForm>{form}</StackedForm>
				</Unit>
				<Unit pad sm="1-2">
					Unit 1-3
					<AlignedForm>{alignedForm}</AlignedForm>
				</Unit>
				<Unit pad sm="1-2">
					<Table>
						{thead}
						{tbody}
					</Table>
				</Unit>
				<Unit pad sm="1-2">
					<Table striped>
						{thead}
						{tbody}
					</Table>
				</Unit>
				<Unit pad sm="1-2">
					<Table bordered>
						{thead}
						{tbody}
					</Table>
				</Unit>
				<Unit pad sm="1-2">
					<Table horizontal>
						{thead}
						{tbody}
					</Table>
				</Unit>
				<Unit pad sm="1-2">
					<Table striped horizontal>
						{thead}
						{tbody}
					</Table>
				</Unit>
			</Grid>
		)
	}
}

MainApp.propTypes = {/* propTypes goes here */}
MainApp.defaultProps = {/* defaultProps goes here */}

export default MainApp
