import React, {PropTypes as T} from 'react'

const DefaultForm = ({className, children}) =>	
	<form className={`pure-form ${className}`}>
		{children}
	</form>
	
DefaultForm.propTypes = {
	className: T.string,
}
DefaultForm.defaultProps = {
	className: '',
}

export default DefaultForm
