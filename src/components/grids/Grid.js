import React, {PropTypes as T} from 'react'

const Grid = ({margin, width, children}) => 
	<div className="pure-g" style={{margin, width}}>
		{children}
	</div>

Grid.propTypes = {
	margin: T.string,
	width: T.string,
}
Grid.defaultProps = {/* defaultProps goes here */}

export default Grid
