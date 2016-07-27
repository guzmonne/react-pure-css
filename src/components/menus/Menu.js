import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import MenuHeading from './MenuHeading.js'
import Item from './Item.js'

const Menu = ({width, className, heading, horizontal, items, scrollable, children}) => {
	const styles = {}
	const headingComponent = !!heading ? <MenuHeading heading={heading} /> : null
	const classNames = classnames('pure-menu', className, {
		'custom-restricted-width': !width,
		'pure-menu-scrollable': !!scrollable,
		'pure-menu-horizontal': !!horizontal,
		'custom-restricted': !!scrollable && !horizontal,
	})
	if (!!width)
	 styles.width = width === true ? '100 px' : width
	return (
		<div className={classNames} style={styles}>
			{headingComponent}
			<ul className="pure-menu-list">
				{!!items ? items.map((item, i) => <Item key={i} {...item}/>) : children}
			</ul>
		</div>
	) 
}

Menu.propTypes = {
	width: T.oneOfType([T.bool, T.string]),
	className: T.string,
	items: T.array,
	heading: T.string,
	scrollable: T.bool,
	horizontal: T.bool,
}

Menu.defaultProps = {
	width: false
}

export default Menu
