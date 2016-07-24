require('components/forms/forms.css')

import React from 'react'
import DefaultForm from 'components/forms/DefaultForm.js'

const customForm = className => ({children}) =>
	<DefaultForm className={className}>
		{children}
	</DefaultForm>

const AlignedForm = customForm('pure-form-aligned')
const StackedForm = customForm('pure-form-stacked')
const InlineForm = customForm('pure-form-inline')

export {InlineForm, AlignedForm, StackedForm}
