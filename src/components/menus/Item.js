import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

const Item = ({selected, disabled, heading, className, href, onClick, label, children}) => {
	const classNames = classnames(className, {
		'pure-menu-item': !heading,
		'pure-menu-heading': !!heading,
		'pure-menu-selected': !heading && !!selected && !disabled,
		'pure-menu-disabled': !heading && !selected && !!disabled, 
	})
	const pureMenuItemContent = !!label ? label : children
	const pureMenuItem = !!heading ?
		<span>{pureMenuItemContent}</span> :
		(
			<a 
				className="pure-menu-link"
				href={href}
				onClick={onClick}
			>
				{!!label ? label : children}
			</a>
		)
	return (
		<li className={classNames}>
			{pureMenuItem}
		</li>
	)
}

Item.propTypes = {
	heading: T.bool,
	className: T.string,
	href: T.string,
	onClick: T.func,
	label: T.string,
	selected: T.bool,
	disabled: T.bool,
}
Item.defaultProps = {
	heading: false,
	href: '#',
	onClick: () => {},
}

export default Item
