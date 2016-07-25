require('./menus.css')
import React from 'react'
import classnames from 'classnames'
import DefaultMenu from './Menu.js'

const Menu = DefaultMenu

const HorizontalMenu = (props) => {
	const classNames = props.className
	const children = props.children
	delete props.className
	delete props.children
	return (
		<Menu 
			className={classnames(classNames, 'pure-menu-horizontal')}
			{...props}
		>
			{props.children}
		</Menu>
	)
}

export {Menu, HorizontalMenu}