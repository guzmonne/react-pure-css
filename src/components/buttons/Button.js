import React, {PropTypes as T} from 'react'

const Button = ({children}) => 
	<button className="pure-button">
		{children}
	</button>

Button.propTypes = {/* propTypes goes here */}
Button.defaultProps = {/* defaultProps goes here */}

export default Button
