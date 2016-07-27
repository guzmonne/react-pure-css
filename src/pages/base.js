import React, {PropTypes as T} from 'react'
import {Grid, Unit} from 'components/grids/'
import {Menu} from 'components/menus/'

const menuItems = [
	{label: 'Get Started'},
	{label: 'Layouts'},
	{label: 'Base', divided: true},
	{label: 'Grids'},
	{label: 'Forms'},
	{label: 'Buttons'},
	{label: 'Tables'},
	{label: 'Menus'},
	{label: 'Extend', divided: true},
	{label: 'Releases'},
] 

const BasePage = () => 
	<div id="layout">
		<div id="menu">
			<Menu heading="Pure" width="100%" items={menuItems}/>
		</div>
		<div id="main">
			<div className="header">
				<h1>Base</h1>
				<h2>Leveraging Normalize.css, an HTML5-ready alternative to CSS resets.</h2>
			</div>
			<div className="content">
				<h2 className="content-subhead">
					The Fundation
				</h2>
				<p>
					All modules in Pure build on top of Normalize.css. It's our fundational layer to maintain some degree of 
					cross-browser consistency. We like Normalize so much that we put it on our CDN. You can pull Normalize.css
					by adding this <code>Link</code> element to your page:
				</p>
				<pre className="code code-wrap" data-language="html">
					{'<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/base-min.css">'}
				</pre>
			</div>
			<div className="footer">
				<Grid>
					<Unit sm="2-3">
		        <p className="legal-license">
		          This site is built with &lt;3 using Pure v0.6.0
		          <br />
		          All code on this site is licensed under the <a href="https://github.com/yahoo/pure-site/blob/master/LICENSE.md">Yahoo BSD License</a> unless otherwise stated.
		        </p>
					</Unit>
					<Unit sm="1-3">
		        <ul className="legal-links">
		            <li><a href="https://github.com/yahoo/pure/">GitHub Project</a></li>
		            <li><a href="https://hackerone.com/yahoo/">Security Contact Info</a></li>
		        </ul>

		        <p className="legal-copyright">
		            © 2014 Yahoo! Inc. All rights reserved.
		        </p>
					</Unit>
				</Grid>
			</div>
		</div>
	</div>

BasePage.propTypes = {}
BasePage.defaultProps = {}

export default BasePage
	