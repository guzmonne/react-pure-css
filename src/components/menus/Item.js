import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

const getClassNames = ({
		selected,
		disabled,
		heading,
		className,
		items,
		divided,
		dividedHorizontal
	}) => classnames(className, {
		'pure-menu-item': !heading,
		'pure-menu-heading': !!heading,
		'pure-menu-selected': !heading && !!selected && !disabled,
		'pure-menu-disabled': !heading && !selected && !!disabled,
		'pure-menu-has-children': !!items,
		'pure-menu-allow-hover': !!items,
		'pure-menu-item-divided': !!divided,
		'pure-menu-item-divided-horizontal': !!dividedHorizontal,
	})

const getPureMenuItem = (props) => {
	const {heading, label, items, children, onClick, href} = props
	if (!!items) return buildPureMenuItems(props)
	const pureMenuItemContent = !!label ? label : children
	return !!heading ? 
		<span onClick={onClick}>{pureMenuItemContent}</span> : 
		<a className="pure-menu-link" href={href} onClick={onClick}>
			{pureMenuItemContent}
		</a>
}

const buildPureMenuItems = ({items}) =>
	<ul className="pure-menu-children">
		{items.map((item, i) => <Item key={i} {...item} />)}
	</ul>

const Item = (props) => {
	const {label, href, items, children} = props
	const classNames = getClassNames(props)
	const pureMenuItem = getPureMenuItem(props)
	return (
		<li className={classNames}>
			{!!items && <a href={href} className="pure-menu-link">{label}</a>}
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
	items: T.array,
	divided: T.bool,
	dividedHorizontal: T.bool,
}
Item.defaultProps = {
	heading: false,
	href: '#',
	onClick: () => {},
}

export default Item
