import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

class Item extends React.Component {
	constructor(){
		super()
		this.getClassNames = this.getClassNames.bind(this)
		this.spanPureMenuItem = this.spanPureMenuItem.bind(this)
		this.anchorPureMenuItem = this.anchorPureMenuItem.bind(this)
		this.getPureMenuItem = this.getPureMenuItem.bind(this)
		this.state = {
			hovering: false,
		}
	}

	getClassNames(){
		const {
			selected,
			disabled,
			heading,
			className,
			items,
			divided,
			dividedHorizontal
		} = this.props
		return classnames(className, {
			'pure-menu-item': !heading,
			'pure-menu-heading': !!heading,
			'pure-menu-selected': !heading && !!selected && !disabled,
			'pure-menu-disabled': !heading && !selected && !!disabled,
			'pure-menu-has-children': !!items,
			'pure-menu-allow-hover': !!items,
			'pure-menu-item-divided': !!divided,
			'pure-menu-item-divided-horizontal': !!dividedHorizontal,
		})
	}

	spanPureMenuItem(pureMenuItemContent){
		const {onClick} = this.props
		return <span onClick={onClick}>{pureMenuItemContent}</span>
	}

	anchorPureMenuItem(pureMenuItemContent){
		const {href, onClick} = this.props
		return (
			<a className="pure-menu-link" href={href} onClick={onClick}>
				{pureMenuItemContent}
			</a>
		)
	}

	getPureMenuItem(){
		const {heading, label, items, children} = this.props
		if (!!items) return this.buildPureMenuItems()
		const pureMenuItemContent = !!label ? label : children
		return !!heading ? 
			this.spanPureMenuItem(pureMenuItemContent) : 
			this.anchorPureMenuItem(pureMenuItemContent)
	}

	buildPureMenuItems(){
		const {items} = this.props
		const maxLength = items
			.reduce((max, item) => max > item.label.length ? max : item.label.length, 0)
		const width = `${maxLength * 8 + 60}px`
		console.log(maxLength)
		return (
			<ul style={{width}} className="pure-menu-children">
				{items.map((item, i) => <Item key={i} {...item} />)}
			</ul>
		)
	}

	render(){
		const {label, href, items, children} = this.props
		const classNames = this.getClassNames()
		const pureMenuItem = this.getPureMenuItem()
		return (
			<li className={classNames}>
				{!!items && <a href={href} className="pure-menu-link">{label}</a>}
				{pureMenuItem}
			</li>
		)
	}
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
