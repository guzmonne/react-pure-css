import React, {PropTypes as T} from 'react'

const Anchor = ({href, children}) =>
	<a className="pure-button" href={href}>
		{children}
	</a>

Anchor.propTypes = {
	href: T.string,
}
Anchor.defaultProps = {
	href: '#',
}

export default Anchor
