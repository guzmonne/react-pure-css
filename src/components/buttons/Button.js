import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

const Button = ({
	href,
	active,
	disabled,
	primary,
	success,
	error,
	warning,
	secondary,
	xsmall,
	small,
	large,
	xlarge,
	className,
	children,
	onClick,
}) => {
	const classNames = classnames('pure-button', className, {
		'pure-button-disabled': !!disabled,
		'pure-button-active': !!active && !disabled,
		'pure-button-primary': !!primary,
		'button-success': !!success && !error && !warning && !secondary,
		'button-error': !success && !!error && !warning && !secondary,
		'button-warning': !success && !error && !!warning && !secondary,
		'button-secondary': !success && !error && !warning && !!secondary,
		'button-xsmall': !!xsmall && !small && !large && !xlarge,
		'button-small': !xsmall && !!small && !large && !xlarge,
		'button-large': !xsmall && !small && !!large && !xlarge,
		'button-xlarge': !xsmall && !small && !large && !!xlarge,
	})

	if (!!href)
		return <a href={href} className={classNames} onClick={onClick}>{children}</a>
	else
		return <button className={classNames} onClick={onClick}>{children}</button>
}
	
Button.propTypes = {
	disabled: T.bool,
	active: T.bool,
	primary: T.bool,
	success: T.bool,
	error: T.bool,
	warning: T.bool,
	secondary: T.bool,
	xsmall: T.bool,
	small: T.bool,
	large: T.bool,
	xlarge: T.bool,
	className: T.string,
	href: T.string,
	onClick: T.func,
}
Button.defaultProps = {
	disabled: false,
	active: false,
	primary: false,
	success: false,
	error: false,
	warning: false,
	secondary: false,
	xsmall: false,
	small: false,
	large: false,
	xlarge: false,
	onClick: ()=>{},
}

export default Button
