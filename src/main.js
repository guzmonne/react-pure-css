import React, {PropTypes as T} from 'react'
import MainHeader from './common/main/header.js'
import {Grid, Unit} from 'components/grids/'
import {Menu} from 'components/menus/'
import {InlineForm, AlignedForm, StackedForm} from 'components/forms/'
import {Button} from 'components/buttons/'
import {Table} from 'components/tables/'
import BasePage from 'pages/base.js'
import TestPage from 'pages/test.js'

class MainApp extends React.Component {
	constructor(){
		super()
	}

	render(){
		const {href} = location
		if (href.indexOf('base') > -1)
			return <BasePage />
		if (href.indexOf('test') > -1)
			return <TestPage />
		return <div>Home</div>
	}
}

MainApp.propTypes = {/* propTypes goes here */}
MainApp.defaultProps = {/* defaultProps goes here */}

export default MainApp
