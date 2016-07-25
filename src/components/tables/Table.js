import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

const Table = ({bordered, horizontal, striped, children}) => {
	const classNames = classnames('pure-table', {
		'pure-table-bordered': !!bordered && !horizontal,
		'pure-table-horizontal': !bordered && !!horizontal,
		'pure-table-striped': !!striped,
	})

	return (
		<table className={classNames}>
			{children}
		</table>
	)
}
	
Table.propTypes = {
	bordered: T.bool,
	horizontal: T.bool,
	striped: T.bool,
}

Table.defaultProps = {
	bordered: false,
	horizontal: false,
	striped: false,
}

export default Table
