import * as React from 'react'
import JsonSchemaForm from '@rjsf/core'

export interface JsonFormProps {
  schema: any
  onChange: any
  onSubmit: any
  onError: any
}

export const JsonForm: React.SFC<JsonFormProps> = ({
  schema,
  onChange,
  onSubmit,
  onError
}) => {
  return (
    <JsonSchemaForm
      schema={schema}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError}
    />
  )
}
