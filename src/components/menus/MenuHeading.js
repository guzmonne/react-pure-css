import React, {PropTypes as T} from 'react'

const MenuHeading = ({href, heading}) => {
	return !!href ? 
		<a href={href} className="pure-menu-heading pure-menu-link">{heading}</a>
		:
		<span className="pure-menu-heading">{heading}</span>
}

MenuHeading.propTypes = {
	heading: T.string.isRequired,
	href: T.string,
}

MenuHeading.defaultProps = {
	heading: '<Menu Title>'
}

export default MenuHeading
