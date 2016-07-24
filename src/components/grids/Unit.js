import React, {PropTypes as T} from 'react'

const Unit = ({nr, sm, md, lg, xl, pad, children}) => {
	let classes = []
	if (!!sm) classes.push(`pure-u-sm-${sm}`)
	if (!!md) classes.push(`pure-u-md-${md}`)
	if (!!lg) classes.push(`pure-u-lg-${lg}`)
	if (!!xl) classes.push(`pure-u-xl-${xl}`)
	if (!!nr) classes = [`pure-u-${nr}`]
	const className = classes.join(' ');
	const childs = !!pad ? <div className="l-box">{children}</div> : children
	return (
		<div className={className}>
			{childs}
		</div>
	)
}

Unit.propTypes = {
	nr: T.string,
	sm: T.string,
	md: T.string,
	lg: T.string,
	xl: T.string,
}

Unit.defaultProps = {
	pad: false,
}

export default Unit
