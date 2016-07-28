import React, {PropTypes as T} from 'react'
import MainHeader from 'common/main/header.js'
import {Grid, Unit} from 'components/grids/'
import {InlineForm, AlignedForm, StackedForm} from 'components/forms/'
import {Button} from 'components/buttons/'
import {Table} from 'components/tables/'
import {Menu} from 'components/menus/'

const scrollableMenu = [
	{label: 'Home'},
	{label: 'Flickr'},
	{label: 'Messenger'},
	{label: 'Sports'},
	{label: 'Finance'},
	{label: 'Cars'},
	{label: 'Beauty'},
	{label: 'Movies'},
	{label: 'Small Business'},
	{label: 'Rugby'},
	{label: 'Tech'},
	{label: 'World'},
	{label: 'News'},
	{label: 'Support'},
	{label: 'About'},
]

const horizontalMenuItems = [
	{label: 'Selected', selected: true},
	{divider: true},
	{label: 'Disabled', disabled: true},
	{label: 'Normal', items: [
		{label: 'One'},
		{divider: true},
		{label: 'Two', items: [
			{label: 'Two-One'}, 
			{label: 'Two-Two', items: [
				{label: 'Two-Two-One'},
				{label: 'Two-Two-Two'},
				{label: 'Two-Two-Three'},
			]}
		]},
		{label: 'Three'},
	]}
]

const menuItems = [
	{label: 'Flickr'},
	{label: 'Messenger'},
	{label: 'Sports'},
	{label: 'Finance'},
	{label: 'More Sites', heading: true},
	{label: 'Games'},
	{label: 'News'},
	{label: 'OMG!'}
]

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

class Test extends React.Component {
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
					<StackedForm>{form}</StackedForm>
				</Unit>
				<Unit pad sm="1-2">
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
				<Unit pad sm="1-2">
					<Menu heading="Yahoo Sites" items={menuItems}></Menu>
				</Unit>
				<Unit pad sm="1-2">
					<Menu width="100%" heading="Yahoo Sites" items={menuItems} />
				</Unit>
				<Unit pad sm="1">
					<Menu heading="Brand" horizontal items={menuItems} />
				</Unit>
				<Unit pad sm="1">
					<Menu heading="Brand" horizontal items={horizontalMenuItems} />
				</Unit>
				<Unit pad sm="1-2">
					<Menu items={horizontalMenuItems} horizontal />
				</Unit>
				<Unit pad sm="1-2">
					<Menu heading="Yahoo Sites" items={horizontalMenuItems}></Menu>
				</Unit>
				<Unit pad sm="1-2">
					<Menu scrollable heading="Home" items={scrollableMenu}></Menu>
				</Unit>
				<Unit pad sm="1">
					<div style={{display: 'block', height: '100px'}}></div>
				</Unit>
			</Grid>
		)
	}
}

export default Test
