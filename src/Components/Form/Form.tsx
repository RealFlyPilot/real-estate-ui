import React from 'react'
import {
  BaseComponentStylePropTypes,
  BaseComponentStylePropType
} from '../component.types'
import { Form as FormikForm, Field as FormikField } from 'formik'

export interface FormProps {
  initialValues?: object
  validate?: any
  onSubmit: any
}

export const Form: React.SFC<FormProps> = FormikForm
// ({
//   children,
//   initialValues,
//   validate,
//   onSubmit
// }) => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validate={validate}
//       onSubmit={onSubmit}
//     >
//       {({ ...props }) => <FormikForm {...props}>{children}</FormikForm>}
//     </Formik>
//   )
// }

export interface ConnectedFieldProps extends BaseComponentStylePropType {
  component?: any
  options?: any
  name?: string
  required?: boolean
  hint?: string
  label?: string
}

export const ConnectedField: React.SFC<ConnectedFieldProps> = ({
  component,
  options,
  ...rest
}) => {
  return <FormikField options={options} component={component} {...rest} />
}
