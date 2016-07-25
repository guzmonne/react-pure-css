import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import MenuHeading from './MenuHeading.js'
import Item from './Item.js'

const Menu = ({width, className, heading, items, children}) => {
	const styles = {}
	const headingComponent = !!heading ? <MenuHeading heading={heading} /> : null
	const classNames = classnames('pure-menu', className, {
		'custom-restricted-width': !width,
	})
	if (width === true) styles.width = '100 px' // custom width
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
}

Menu.defaultProps = {
	width: false
}

export default Menu
