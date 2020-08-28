// @ts-nocheck

/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
// [Final Form](https://final-form.org/docs/react-final-form/getting-started)
import React from 'react'
import { Form as FinalForm } from 'react-final-form'
import { Code } from '../../Utils/Code'
export { useForm } from 'react-hook-form'

// eslint-disable-next-line react/prop-types
export const Form = ({ children, initialValues, validate }: any) => (
  <FinalForm
    initialValues={initialValues}
    onSubmit={console.debug}
    validate={validate}
  >
    {({ handleSubmit, values }: any) => (
      <form onSubmit={handleSubmit}>{children}</form>
    )}
  </FinalForm>
)

export interface HookFormProps {
  submitHandler: Function
  children: any
}

export const getFormValues = (node) =>
  node.querySelector('pre')
    ? JSON.parse(node.querySelector('pre').textContent)
    : {}

export const FormWithCodePreview = ({
  children,
  initialValues,
  validate
}: any) => (
  <FinalForm
    initialValues={initialValues}
    onSubmit={console.debug}
    validate={validate}
  >
    {({ handleSubmit, values }: any) => (
      <>
        <form onSubmit={handleSubmit}>{children}</form>
        <div data-testid='values'>
          {Object.keys(values).length > 0 && (
            <Code language='json'>{JSON.stringify(values, 0, 2)}</Code>
          )}
        </div>
      </>
    )}
  </FinalForm>
)
